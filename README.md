# BSA interview project

### [Live demo](https://edelstone.github.io/bsa-interview-project/)

## Notes on design intention

- **My dashboards:** I envisioned a small fly-out menu that would link to a homepage listing of all employee dashboards, and a link to global preferences. No UI was designed because I considered it out of scope.
- **Manage dashboard:** These are the settings for this particular dashboard styled in a modal. It could contain many more settings, but right now it handles the default options for the form. If the user selects "Save" the page reloads with the new defaults. If the user cancels or clicks away before saving, the modal simply closes. (I suppose there could be a warning if the user makes a form change and then clicks away before saving, but that's probably not necessary).
- **Choose preset:** Hardcoded as "Next two weeks" in the demo, this would default to whatever the user has set in the dashboard settings. The clickable dropdown menu is for quickly changing to another preset without altering the longterm default setting. When "Custom" is chosen, the date fields clear. When another preset is chosen, the date fields fill with the corresponding dates for the chosen range.
- **Date range inputs:** Dates are pre-filled based on the default setting (if one exists). As soon as the user makes custom changes to either date field, the preset link text should revert to "Choose preset".
- **Country and audience inputs:** Pre-filled with default settings (if they exist).
- **Submitting the form:** Ideally there would be an error if any fields were blank, or if date range was invalid (i.e. start date comes after end date). There is no UI built for this.
- **Forecasting data display:** Revealed when the form is submitted, this is pretty straightforward. It contains a count of impressions followed by a summary of the user's chosen inputs.

## Notable issues

- Form is not accessible.
- Mobile layout is functional, but could use work.
- Dashboard settings allow for only one default country or audience, while the form permits unlimited.

## Resources

- [Assignment summary](project.md)
- [HTML5 Boilerplate](https://html5boilerplate.com/)
- [Tachyons](http://tachyons.io/docs/)
- [Font Awesome](https://fontawesome.com)
- [jQuery Modal](http://jquerymodal.com/)
- [Zebra Datepicker](https://github.com/stefangabos/Zebra_Datepicker)
- [Chosen](https://harvesthq.github.io/chosen/)
