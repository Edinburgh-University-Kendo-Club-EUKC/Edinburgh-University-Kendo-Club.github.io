# Website Editing Instructions

This file is for the person who updates the website each year.

The site is designed so most yearly updates are simple.

## Committee Photos

Committee photos are stored in `images/committee/`.

If you only want to change a photo, the easiest method is:

1. Find the existing photo file you want to replace.
2. Replace it with the new image.
3. Keep exactly the same filename.

Current committee image filenames:

- `president.jpg`
- `secretary.jpg`
- `treasurer.jpg`
- `captain.jpg`
- `vice_captain.jpg`
- `armourer.jpg`
- `social_sec.jpg`
- `public_off.jpg`
- `web-manager.jpg`

If the filename stays the same, you do not need to edit any HTML.

## Committee Names And Roles

Committee member details are stored in `assets/js/committee-data.js`.

Each person looks like this:

```js
{
  name: 'Example Name',
  role: 'Example Role',
  image: 'images/committee/president.jpg'
}
```

## Add More People

Open `assets/js/committee-data.js`.

There are two lists:

- `executive`
- `general`

To add a new person, copy one of the existing entries and paste it into the correct list.

Example:

```js
{
  name: 'New Member Name',
  role: 'Equipment Officer',
  image: 'images/committee/equipment-officer.jpg'
}
```

If you add a brand new image filename:

1. Add the image file into `images/committee/`.
2. Make sure the `image` value matches the filename exactly.

## Remove People

To remove someone, delete their whole entry from `assets/js/committee-data.js`.

## Contact Form

The contact form is in `contact.html`.

It uses FormSubmit, so no backend server is needed.

If the form stops working, check:

1. The form action still points to `https://formsubmit.co/suclub16@ed.ac.uk`
2. The club inbox has approved the FormSubmit confirmation email

## Recommended Workflow

For simple yearly updates:

1. Replace committee photos in `images/committee/`
2. Update names and roles in `assets/js/committee-data.js`
3. Commit the changes
4. Publish to GitHub Pages
