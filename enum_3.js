var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
    SocialMedia["LINKEDIN"] = "LINKEDIN";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
