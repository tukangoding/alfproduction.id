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
  it('uses the subject selector label for pesan mode', async () => {
    const openSpy = mockOpen()
    const wrapper = mount(LeadForm)

    expect(wrapper.get('#lead-subject').findAll('option').map((o) => o.text())).toContain(
      'Pembuatan Mars'
    )
    await wrapper.get('#lead-organization').setValue('SIT Kota Wali')
    await wrapper.get('#lead-subject').setValue('Pembuatan Mars')
    await wrapper.trigger('submit')

    const url = openSpy.mock.calls[0][0] as string
    const text = decodeURIComponent(url.split('?text=')[1] ?? '')
    expect(text).toContain('Bentuk Kebutuhan: Pembuatan Mars')
    expect(text).toContain('Halo ALF Production, saya ingin memesan pembuatan Mars/Hymne.')
  })

  it('marks the identifying fields as required', () => {
    const wrapper = mount(LeadForm)

    expect(wrapper.get('#lead-organization').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-pic').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-whatsapp').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-subject').attributes('required')).toBeDefined()
    expect(wrapper.get('#lead-email').attributes('required')).toBeUndefined()
  })
})
