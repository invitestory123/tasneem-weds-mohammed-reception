/**
 * wedding-data.js — Customer-facing editable data layer for Reception Invitation
 * Couple: Tasneem & Mohammed
 * Event: Wedding Reception
 * Date: Sunday, September 26, 2027 from 7:00 PM to 1:00 AM
 * Venue: Terrace Event Venue (1680 Creditstone Rd, Concord, ON L4K 5T4, Canada)
 * Music: Mast Magan (Instrumental)
 */

window.WEDDING_DATA = {
  bride: "Tasneem",
  groom: "Mohammed",
  kicker: "Wedding Reception",
  invitationLine: "Together with their families, cordially invite you to celebrate the Wedding Reception of",
  dateLabel: "Sunday, September 26, 2027",
  shortDate: "26 . 09 . 2027",
  countdownTarget: "2027-09-26T19:00:00-04:00",
  countdownLabel: "Until the Reception",

  storyKicker: "Bismillah hir-Rahman nir-Rahim",
  storyTitle: "A Joyous Celebration of Love & Togetherness",
  story: [
    "With the blessings of the Almighty Allah Subhanahu wa Ta'ala and our loving families, we invite you to celebrate the joyous wedding reception of Tasneem & Mohammed.",
    "Your gracious presence, warmth, and heartfelt prayers will make our evening truly unforgettable as we celebrate new beginnings and cherish this special milestone.",
  ],

  eventsKicker: "Celebration of Love",
  eventsTitle: "Wedding Reception",
  eventsSubtitle: "An enchanting evening of dinner, joy, and memorable celebrations.",

  events: [
    {
      name: "Reception",
      date: "Sunday, 26 September 2027",
      time: "7:00 PM – 1:00 AM",
      venue: "Terrace Event Venue\n1680 Creditstone Rd, Concord, ON L4K 5T4",
      note: "Cocktails, dinner & celebrations to honor the newlyweds.",
    },
  ],

  venue: {
    name: "Terrace Event Venue",
    address: "1680 Creditstone Rd, Concord, ON L4K 5T4, Canada",
    hint: "Concord, Vaughan (Greater Toronto Area)",
    mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2f25e738e6e5:0xe217a27ca70e02c2?entry=s&sa=X&ved=2ahUKEwjVkvWJhqaXAxX_HYYAHTmkMXgQ4kB6BAgZEAA&hl=en",
    mapEmbed: "https://www.google.com/maps?q=1680+Creditstone+Rd,+Concord,+ON+L4K+5T4&output=embed",
  },

  rsvp: {
    email: "Modada1523@gmail.com",
    whatsapp: "+16478247786",
    heading: "RSVP",
    subheading: "Kindly respond to honour us with your presence at the Wedding Reception",
    deadline: "Sunday, September 12, 2027",
  },

  closing: "With prayers, love, and gratitude, we eagerly await your presence.",

  media: {
    petals: "./editable/assets/petals.png",
    hall: "./editable/assets/hall.png",
    cover: "./editable/assets/cover.png",
    introVideo: "./editable/assets/intro.mp4",
    coupleVideo: "./editable/assets/couple.mp4",
    divider: "./editable/assets/divider.png",
    floral: "./editable/assets/floral.png",
    audio: "./editable/assets/mast-magan-instrumental.mp3",
    songTitle: "Mast Magan (Instrumental)",
    playAfterWords: true,
  },
};
