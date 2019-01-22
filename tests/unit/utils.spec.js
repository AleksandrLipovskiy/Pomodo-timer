import { leftPad, numberOfSecondsFromNow, beep } from '@/utils/utils'

describe('utils', () => {

	describe('leftPad', () => {
		it('should return the string itself if its length is more than 1', () => {
			expect(leftPad('01')).toEqual('01')
		})

		it('should add a 0 from the left if the entry string is of the length of 1', () => {
			expect(leftPad('0')).toEqual('00')
		})
	})

	describe('numberOfSecondsFromNow', () => {
    it('should return 0 if no parameter is passed', () => {
      expect(numberOfSecondsFromNow()).toEqual(0)
    })
    it('should return the exact number of seconds from now', () => {
    	let startTime = 1000
    	const SECOND = 1000
      Date.now = jest.fn(() => 2000)
      let date = Math.floor((Date.now() - startTime) / SECOND)

      expect(numberOfSecondsFromNow(startTime)).toEqual(date)
    })
  })

  describe('beep', () => {
    it('should call the Audio.play functuon', () => {
      let mockAudioPlay = jest.fn()

      Audio.prototype.play = mockAudioPlay

      beep()
      expect(mockAudioPlay.mock.calls.length).toEqual(1)
      expect(mockAudioPlay).toHaveBeenCalled()
    })
  })

}) 