[
  {
    "name":"Template 53 Learning Presets",
    "type":"section"
  },
  {
    "name":"Untouched",
    "type":"preset",
    "data": {
      "xml": "53/untouched.xml",
      "video": "http://files.flixpress.com/1075982_1553968_P.mp4",
      "description": "<p>This XML is straight from the server to a \"preset\" file. No modifications were made to the xml at all. There were 5 images. Image 5 was used in the second slide (which was layout 7). The other four were used in multi-image layout 16. Images 1, 2, and 4 had captions, I left #3 blank. User text was entered on the first two slides.</p>"
    }
  },
  {
    "name":"Placeholders With Images",
    "type":"preset",
    "data": {
      "xml": "53/placeholders-with-images.xml",
      "video": "http://files.flixpress.com/1075982_1553968_P.mp4",
      "description": "<p>In this case, the images remain available in the library at the top, but the single image slide populated WITHOUT using one. It was replaced with a placeholder image, which is important. Without it, the UI shows a broken image and the user may not know what to do. They will be able to render, but the image will default to something they wouldn't expect.</p><p>I kept the chosen camera angles but removed the user text, just to illustrate the (obvious) difference between empty text fields and filled ones.</p><p>Regarding multi-image slides, you can either completely fill all images and (optionally) caption them, or you can remove all of them as I have done in this preset. Technically, you could do some kind of halfway approach, but the user would have no indication that anything is incomplete, and they probably wouldn't understand the resulting errors they would get if they didn't finish off that slide properly.</p><p>You can view a comparison between the untouched version of the xml and the changes I made by viewing the <a href=\"https://github.com/flixpressllc/template-presets/commit/785344480e3cdbd5decec32c0f1fdcf1ec8ac67d\" target=\"_blank\">git commit that updated the xml</a>.</p>"
    }
  }
]