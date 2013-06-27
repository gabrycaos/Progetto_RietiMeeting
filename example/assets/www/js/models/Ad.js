define(["jquery", "underscore", "parse"],
  function ($, _, Parse) {
    var Ad = Parse.Object.extend("Ad", {
      defaults: {
        title: undefined,
        figure: new Image(),
        hour: undefined
      }

      });

    return Ad;

  });