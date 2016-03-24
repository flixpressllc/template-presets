# Template Presets

See the gulpfile to push template presets to the dev server or to Amazon S3. To just contribute, read on.

# Creating Presets

## Flixpress.js Dev Mode

Presets functionality is housed inside the Flixpress.js library. To *create* presets, you must switch the library to "Dev Mode".

To turn on Dev Mode, open your console and enter the command `Flixpress.devModeOn()` while on the page you need Dev Mode for.

Dev Mode is not persistent, so you will have to turn it on again after every page refresh.

## Loading the Presets Menu

Presets are automatically loaded at Flixpress.com if they are available. You'll want to re-load them if you are interested in creating presets, or loading them from another location (like a working directory). See the Hosting section below for some thoughts on how to host the files.

When you are in Dev Mode, the default location for presets is the our S3 bucket. To use a different location, you'll want to call `Flixpress.editor.presets('http://example.com/files/')` from the console. Do this before you open a template editor screen (or at least before the main editor interface loads). The function will automatically fire again as you enter the slide editor window.

If properly formatted preset menus with properly formatted filenames exist in that location, you'll get a couple admin buttons in the lower left portion of your screen and the normal "Presets" button just above the editor.

## Create a preset

Actually creating a preset is fairly simple.

1. Work on a template as you normally would, then when you have everything the way you like it, render a preview of the template.

2. Open that preview for editing (while in Dev Mode). 

3. click the "Get XML" button in the lower left corner of the screen. 

4. Copy the selected XML that appears on screen into a blank XML file somewhere.

## Tweak your preset

As it stands, your preset will be a fully realized template, because you won't be able to render a template with images missing. But perhaps you want your preset to be full of blank slides that are ready to customize. Maybe you want to provide some images. Maybe you don't.

Carefully editing the XML file you've created will allow you to do just that.

Viewing the [How To branch](https://github.com/flixpressllc/template-presets/tree/how-to-make-presets) of this repo will give you more information about tweaking presets, with some demos you can actually view on Flixpress.com.

## Create/Update a preset menu

Preset menus are what tells Flixpress that presets exist for a given template. You'll have to either create one if one doesn't already exist, or you'll have to edit an existing menu.

Preset menus filenames must be in the following format:  
`template[X]XX.js`

For now, they must NOT end in the standard `.json` extension. An example of a preset menu file name for template number 81 would be `template81.js`. Template 102 would be `template102.js`.

Preset menus must be perfectly constructed JSON files or they will not load properly. Here is an example of a good menu file:

```json
[
  {
    "name":"Template 81 Amazing presets",
    "type":"section"
  },
  {
    "name":"Small Start - Include Assets 2",
    "type":"preset",
    "data": {
      "video": "http://mediarobotvideo.s3.amazonaws.com/help/basic/customizing-text.mp4",
      "xml": "https://flixpress.com/templates/presets/81/sample-city-pro-preview.xml",
      "description": "This preset's xml was set relative to the menu json file."
    }
  },
  {
    "name":"Two whole slides! - No Assets",
    "type":"preset",
    "data": {
      "video": "http://mediarobotvideo.s3.amazonaws.com/help/basic/customizing-text.mp4",
      "xml": "81/placeholder.xml"
    }
  }
]
```

Assuming all the paths given in the file are correct (and they aren't really, in this example), and the XML files are made properly, the presets will work.

The `data.xml` field may contain an absolute url, or a relative path from the JSON file itself. In the example above, if the JSON file is at `http://example.com/files/template81.json`, then we would expect the second preset to be found at `http://example.com/files/81/placeholder.xml`.

# Hosting Presets

## GitHub raw content

To host presets in GitHub, you'll need to know the path to the raw files, which is something like

```
https://raw.githubusercontent.com/USERNAME/REPOSITORY/BRANCH/
```

From there, you'll need to direct the script to the folder that is housing the presets. In the case of this repo, it is

```
https://raw.githubusercontent.com/flixpressllc/template-presets/master/presets/
```

So to use the presets hosted here, you'd type the following into the console:

```
Flixpress.editor.presets('https://raw.githubusercontent.com/flixpressllc/template-presets/master/presets/');
```

Then the latest presets would be ready to go.

## Dropbox content

Possibly, a better solution during development --- because pushing to a repo for every small change is kind of against the best practices for Git --- would be using Dropbox.

You'd specifically have to use the Public Folder. Simply right click a file in the folder that houses your presets, and choose "Copy Public Link". Then chop the file name off of that string to get the folder and use that location while you work.

Of course, the best of both worlds would be to pull down a fork of this repo into a Dropbox folder so that you could both develop presets quickly, test them, then pull request them into this repo for inclusion on the main site.

## Flixpress's Amazon S3 Bucket

You'll need to create a file in the root directory of this repo called `aws.json`. From there, you'll enter the authentication for the bucket like this:

```json
{
  "key": "THE_KEY_HERE",
  "secret": "THE_SECRET_HERE"
}
```

Eventually, the Gulp file provided will be a little more universal, so that you can use *any* S3 bucket, but for now, it is Flixpress or just do it manually.

From there, use `gulp development` from the command line, assuming you've got all the `npm` stuff you need.