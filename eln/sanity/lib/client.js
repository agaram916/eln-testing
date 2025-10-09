import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'eixwrj6b', // find this in sanity.config.ts
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, 
  token:'skg1LQ0jEZykn63WVKp7Wpcn6GMwaCfvssBVoWU7rtWqah6Bgnp85g0JHvAqmjXtcg8h0l3OqMbCgeWMLvokBrgT3LOIWx68abaOJN2EdyRDeyD90Va9Tix5U0UxzRqDy1xk9dl2dXtNzIRIpJ5jU7wSGEHrvVXAyU20m2xhPw27PLgTls1j',
})
