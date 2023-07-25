import { AppService } from '../../src/app.service'

describe('AppService', () => {
  let sub: AppService

  beforeEach(async () => {
    sub = new AppService()
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sub.getHello()).toBe('Hello World!')
    })
  })
})
