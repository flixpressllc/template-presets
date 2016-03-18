# Template Presets

See the gulpfile to push template presets to the dev server or to Amazon S3. To just contribute, read on.

# Creating Presets

(Full documentation coming soon.)

## Flixpress.js Dev Mode

Presets functionality is housed inside the Flixpress.js library. To *create* presets, you must switch the library to "Dev Mode".

To turn on Dev Mode, either open your console and enter the command `Flixpress.devModeOn()` or drag the button below into your browser's bookmarks or favorites, then click that bookmark/favorite while on the page need Dev Mode for.

<a href="javascript:Flixpress.devModeOn();" style="padding: 8px; border: 1px solid gray; border-radius: 6px; color: black; background: #ccc; text-decoration: none; font-weight: bold">FlixPress Dev Mode</a>

Dev Mode is not persistent, so you will have to turn it on again after every page refresh.

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

You'd simply right click the folder that houses your presets, and choose "Copy Dropbox link". Then use that location while you work.

Of course, the best of both worlds would be to pull down a fork of this repo into a Dropbox folder so that you could both develop presets quickly, test them, then pull request them into this repo for inclusion on the main site.
