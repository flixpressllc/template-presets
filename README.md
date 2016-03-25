# How to Make Presets

This branch is never going to be merged in. Its purpose is for showing examples of how to use the presets.

More documentation to come.

For now, log in to Flixpress, then open either a preview of template #53 or start from scratch on preview #53. Before you do anything else on either the My Previews tab or on the Automated Templates page, and copy/paste the following commands one at a time into your browser's Javascript console:

```
Flixpress.devModeOn();
```
```
Flixpress.editor.presets('https://raw.githubusercontent.com/flixpressllc/template-presets/how-to-make-presets/presets/');
```

Or in one fell swoop:

```
Flixpress.devModeOn().done(function(){
  $('body').on('flixpressJsLoaded', function(){
    Flixpress.editor.presets('https://raw.githubusercontent.com/flixpressllc/template-presets/how-to-make-presets/presets/');
  });
});
```



Once you begin editing (after cropping your images), you will see the presets menu appear. Explore that for some tips on formatting a preset.