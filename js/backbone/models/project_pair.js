(function ($) {
  SH.ProjectPair = Backbone.Model.extend({
    defaults: {
      firstImgUrl: "",
      secondImgUrl: "",
      firstImgOverlayText: "",
      secondImgOverlayDescription: "",
      firstImgOverlayText: "",
      secondImgOverlayDescription: "",
      firstPageId: "",
      secondPageId: ""
    }
  });
} (jQuery));