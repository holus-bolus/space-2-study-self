const router = require('express').Router()

const auth = require('~/routes/auth')
const user = require('~/routes/user')
const email = require('~/routes/email')
const review = require('~/routes/review')
const subject = require('~/routes/subject')
const location = require('~/routes/location')
const adminInvitation = require('~/routes/adminInvitation')
const offer = require('~/routes/offer')
const category = require('~/routes/category')
const cooperation = require('~/routes/cooperation')
const comment = require('~/routes/comment')

router.use('/auth', auth)
router.use('/users', user)
router.use('/send-email', email)
router.use('/reviews', review)
router.use('/subjects', subject)
router.use('/location', location)
router.use('/admin-invitations', adminInvitation)
router.use('/offers', offer)
router.use('/categories', category)
router.use('/cooperations', cooperation)
router.use('/comments', comment)

module.exports = router
