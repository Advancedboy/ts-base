enum Membership{
	Simple,
	Standart, 
	Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membershipReverse);

enum SocialMedia {
	VK = 'VK',
	INSTAGRAM = 'INSTAGRAM',
	LINKEDIN = 'LINKEDIN'
}

const social = SocialMedia.INSTAGRAM
console.log(social);