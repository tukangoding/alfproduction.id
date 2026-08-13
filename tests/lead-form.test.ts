// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LeadForm from '../components/LeadForm.vue'

function mockOpen(): ReturnType<typeof vi.spyOn> {
  return vi.spyOn(window, 'open').mockImplementation(() => null)
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('LeadForm', () => {
  it('opens WhatsApp with every filled field when submitted in kemitraan mode', async () => {
    const openSpy = mockOpen()
    const wrapper = mount(LeadForm, { props: { mode: 'kemitraan' } })

    await wrapper.get('#lead-organization').setValue('Yayasan Harapan')
    await wrapper.get('#lead-pic').setValue('Budi Santoso')
    await wrapper.get('#lead-whatsapp').setValue('081234567890')
    await wrapper.get('#lead-email').setValue('budi@example.com')
    await wrapper.get('#lead-subject').setValue('Jejaring Pendidikan')
    await wrapper.get('#lead-estimate').setValue('1 lagu Mars dalam 3 bulan')
    await wrapper.get('#lead-message').setValue('Kami membutuhkan Mars untuk yayasan.')
    await wrapper.trigger('submit')

    expect(openSpy).toHaveBeenCalledTimes(1)
    const url = openSpy.mock.calls[0][0] as string
    expect(url).toContain('wa.me/6285727956892')

    const text = decodeURIComponent(url.split('?text=')[1])
    expect(text).toContain('Halo ALF Production, saya ingin mengajukan kemitraan.')
    expect(text).toContain('Nama Organisasi/Perusahaan: Yayasan Harapan')
    expect(text).toContain('Nama PIC: Budi Santoso')
    expect(text).toContain('WhatsApp: 081234567890')
    expect(text).toContain('Email: budi@example.com')
    expect(text).toContain('Bentuk Kemitraan: Jejaring Pendidikan')
    expect(text).toContain('Perkiraan Kebutuhan: 1 lagu Mars dalam 3 bulan')
    expect(text).toContain('Pesan: Kami membutuhkan Mars untuk yayasan.')
  })

  it('omits optional fields left empty and skips them in the message', async () => {
    const openSpy = mockOpen()
    const wrapper = mount(LeadForm, { props: { mode: 'kemitraan' } })

    await wrapper.get('#lead-organization').setValue('SIT Al Furqon')
    await wrapper.get('#lead-pic').setValue('Siti Rahma')
    await wrapper.get('#lead-whatsapp').setValue('082211334455')
    await wrapper.get('#lead-subject').setValue('Organisasi')
    await wrapper.trigger('submit')

    const url = openSpy.mock.calls[0][0] as string
    const text = decodeURIComponent(url.split('?text=')[1])
    expect(text).not.toContain('Email:')
    expect(text).not.toContain('Perkiraan Kebutuhan:')
    expect(text).not.toContain('Pesan:')
    expect(text).toContain('Bentuk Kemitraan: Organisasi')
  })

  it('uses the subject selector label for pesan mode', async () => {
    const openSpy = mockOpen()
    const wrapper = mount(LeadForm, { props: { mode: 'pesan' } })

    expect(wrapper.get('#lead-subject').findAll('option').map((o) => o.text())).toContain(
      'Pembuatan Mars'
    )
    await wrapper.get('#lead-organization').setValue('SIT Kota Wali')
    await wrapper.get('#lead-subject').setValue('Pembuatan Mars')
    await wrapper.trigger('submit')

    const url = openSpy.mock.calls[0][0] as string
    const text = decodeURIComponent(url.split('?text=')[1])
    expect(text).toContain('Bentuk Kebutuhan: Pembuatan Mars')
    expect(text).toContain('Halo ALF Production, saya ingin memesan pembuatan Mars/Hymne.')
  })

  it('marks the identifying fields as required', () => {
    const wrapper = mount(LeadForm, { props: { mode: 'kemitraan' } })

    expect(wrapper.get('#lead-organization').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-pic').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-whatsapp').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-subject').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-email').attributes('required')).toBeUndefined()
  })
})
