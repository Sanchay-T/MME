function FormillaPublicApiBaseService() {
  this.baseUrl = "https://" + Formilla.formillaApiDomain;
}
function FormillaPublicWebApiService() {
  (this.resourceUrl =
    Formilla.formillaProtocol() +
    Formilla.formillaDomain +
    "/formilla-chat.asmx/"),
    FormillaPublicApiBaseService.call(this);
}
function FormillaPublicApiContactService() {
  (this.resourceUrl = "/contacts"), FormillaPublicApiBaseService.call(this);
}
function FormillaPublicApiEventService() {
  (this.resourceUrl = "/events"), FormillaPublicApiBaseService.call(this);
}
function FormillaService() {
  (this.baseUrl =
    Formilla.formillaProtocol() +
    Formilla.formillaDomain +
    "/ajaxhandler.aspx?"),
    (this.urlLimit = 2e3);
}
function FormillaCookieService() {
  (this.CookieSettings =
    Formilla.isCloudflareEditor ||
    Formilla.isWix ||
    Formilla.FormillaCheckLoadedInsideWix()
      ? ";Secure;SameSite=None"
      : ""),
    (this.isLocalStorage = Formilla.isLocalStorage);
}
function FormillaLiveChatCookieService() {
  FormillaCookieService.call(this);
}
function FormillaGoogleAnalyticService(trackerName, accountId) {
  (this.GA_ID = accountId),
    (this.TrackerName = trackerName),
    (this.gaInstance = null),
    (this.isGoogleTag = !1);
  var parent = window.parent.window;
  void 0 !== parent.gtag
    ? ((this.isGoogleTag = !0), (this.gaInstance = parent.gtag))
    : void 0 !== parent.ga
    ? (this.gaInstance = parent.ga)
    : void 0 !== parent.__gaTracker
    ? (this.gaInstance = parent.__gaTracker)
    : void 0 !== parent._gaq && (this.gaInstance = parent._gaq),
    "function" == typeof this.gaInstance &&
      (this.isGoogleTag
        ? this.gaInstance("config", this.GA_ID, { send_page_view: !1 })
        : this.gaInstance("create", this.GA_ID, "auto", trackerName));
}
function FormillaWidget() {
  (this.ClassName = "FormillaWidget"),
    (this.Model = new FormillaWidgetModel()),
    (this.EventBindings = new Array()),
    (this.FormillaService = new FormillaService()),
    (this.CookieService = new FormillaCookieService()),
    (this.GoogleAnalyticService = Formilla.googleAnalyticService),
    (this.ModalContainerId = ""),
    (this.WidgetContainer = ""),
    (this.PoweredByContainer = ""),
    (this.wasWidgetInitialize = !1),
    (this.WidgetDisplayCookieKey = "formillaEdgeDisplay"),
    (this.WidgetDisplayList = "formillaEdgeDisplayedList"),
    (this.WidgetConversionList = "formillaEdgeConversionList"),
    (this.WidgetLastDisplayCookieKey = "formillaEdgeLastDisplay"),
    (this.WidgetScrollEventFtn = null),
    (this.ResizeEventFtn = null),
    (this.MouseLeaveEventFtn = null),
    (this.IsConverted = !1);
}
function FormillaWidgetModel() {
  (this.Id = null),
    (this.WidgetName = null),
    (this.IsPremium = !1),
    (this.HtmlContent = null),
    (this.Css = null),
    (this.Guid = null),
    (this.WidgetType = null),
    (this.WidgetDisplayType = null),
    (this.WidgetTemplate = null),
    (this.HowOftenDisplay = null),
    (this.HowOftenDisplayTimePeriod = null),
    (this.WidgetLocation = null),
    (this.WhenToDisplay = null),
    (this.WhenToDisplaySeconds = null),
    (this.DisplayWhenUserIsAboutToExit = !1),
    (this.IsPoweredByDisabled = !1),
    (this.IsWidgetDelayEnabled = !1),
    (this.WidgetDelayUnit = 0),
    (this.WidgetDelayAmount = 0);
}
function FormillaDisplayRule() {
  this.Conditions = null;
}
function FormillaDisplayRuleCondition() {
  (this.Criteria = null), (this.Operator = null), (this.Value = null);
}
function FormillaEmailBaseWidget() {
  FormillaWidget.call(this),
    (this.EmailSubmittedCookieKey = "formillaEdgeEmailSubmitted"),
    (this.ModalContainerId = ""),
    (this.WidgetContainer = ""),
    (this.CloseElementId = ""),
    (this.SubscribeBtnId = ""),
    (this.EmailInputId = ""),
    (this.EmailErrorIconContainerId = null),
    (this.EmailBodyContainerId = ""),
    (this.EmailSuccessContainer = ""),
    (this.EmailSuccessTextContainer = ""),
    (this.EmailContinuetBtn = ""),
    (this.PoweredByContainer = "");
}
function FormillaEmailModalWidget() {
  FormillaEmailBaseWidget.call(this),
    (this.ClassName = "FormillaEmailModalWidget"),
    (this.ModalContainerId = "divFormillaEdgeWidgetContainer"),
    (this.WidgetContainer = "formillaEmailPopupContainer"),
    (this.CloseElementId = "formillaEmailClose"),
    (this.SubscribeBtnId = "formillaEmalSubscribeSubmitBtn"),
    (this.EmailInputId = "formillaEmalSubscribeEmail"),
    (this.EmailErrorIconContainerId = null),
    (this.EmailBodyContainerId = "formillaEmailBodyContainer"),
    (this.EmailSuccessContainer = "formillaEmailSuccessContainer"),
    (this.EmailSuccessTextContainer = "formillaEmailSuccessTextContainer"),
    (this.EmailContinuetBtn = "formillaEmailContinuetBtn"),
    (this.PoweredByContainer = "formillaEmailPoweredby");
}
function FormillaEmailWebsiteBarWidget() {
  FormillaEmailBaseWidget.call(this),
    (this.ClassName = "FormillaEmailWebsiteBarWidget"),
    (this.ModalContainerId = "divFormillaEmailWebsiteWidgetContainer"),
    (this.CloseElementId = "formillaEmailWebsiteClose"),
    (this.SubscribeBtnId = "formillaEmalWebsiteSubscribeSubmitBtn"),
    (this.EmailInputId = "formillaEmalWebsiteSubscribeEmail"),
    (this.EmailErrorIconContainerId = "formillaEmailWebsiteValidationError"),
    (this.EmailBodyContainerId = "formillaEmailWebsiteBodyContainer"),
    (this.EmailSuccessContainer = "formillaEmailWebsiteSuccessContainer"),
    (this.EmailSuccessTextContainer =
      "formillaEmailWebsiteSuccessTextContainer"),
    (this.EmailContinuetBtn = "formillaEmalWebsiteContinueBtn"),
    (this.PoweredByContainer = "formillaEmailWebsitePoweredBy"),
    (this.WidgetContainer = "formillaEmailWebsiteWidget");
}
function FormillaEmailScrollBoxWidget() {
  FormillaEmailBaseWidget.call(this),
    (this.ClassName = "FormillaEmailScrollBoxWidget"),
    (this.ModalContainerId = "divFormillaEmailScrollBoxWidgetContainer"),
    (this.CloseElementId = "formillaEmailScrollBoxClose"),
    (this.SubscribeBtnId = "formillaEmailScrollBoxSubscribeSubmitBtn"),
    (this.EmailInputId = "formillaEmailScrollBoxSubscribeEmail"),
    (this.EmailBodyContainerId = "formillaEmailScrollBoxBodyContainer"),
    (this.EmailSuccessContainer = "formillaEmailScrollBoxSuccessContainer"),
    (this.EmailSuccessTextContainer =
      "formillaEmailScrollBoxSuccessTextContainer"),
    (this.EmailContinuetBtn = "formillaEmailScrollBoxContinueBtn"),
    (this.PoweredByContainer = "formillaEmailScrollBoxPoweredBy"),
    (this.WidgetContainer = "formillaEmailScrollBoxWidgetContainer");
}
function FormillaFacebookBaseWidget() {
  FormillaWidget.call(this),
    (this.FacebookPageLikedCookieKey = "formillaEdgeFacebookPageLiked"),
    (this.ModalContainerId = ""),
    (this.WidgetContainer = ""),
    (this.CloseElementId = ""),
    (this.FacebookIframeId = ""),
    (this.FacebookBodyContainerId = ""),
    (this.PoweredByContainer = ""),
    (this.BlurEventFtn = null);
}
function FormillaFacebookModalWidget() {
  FormillaFacebookBaseWidget.call(this),
    (this.ClassName = "FormillaFacebookModalWidget"),
    (this.ModalContainerId = "divFormillaFacebookModalWidgetContainer"),
    (this.WidgetContainer = "formillaFacebookPopupContainer"),
    (this.CloseElementId = "formillaFacebookClose"),
    (this.FacebookIframeId = "formillaFacebookPopupIframe"),
    (this.FacebookBodyContainerId = "formillaFacebookBodyContainer"),
    (this.PoweredByContainer = "formillaFacebookPoweredby");
}
function FormillaFacebookWebsiteBarWidget() {
  FormillaFacebookBaseWidget.call(this),
    (this.ClassName = "FormillaFacebookWebsiteBarWidget"),
    (this.ModalContainerId = "divFormillaFacebookWebsiteBarWidgetContainer"),
    (this.WidgetContainer = "formillaFacebookWebsiteWidget"),
    (this.CloseElementId = "formillaFacebookWebsiteClose"),
    (this.FacebookIframeId = "formillaFacebookWebsiteIframe"),
    (this.FacebookBodyContainerId = "formillaFacebookWebsiteBodyContainer"),
    (this.PoweredByContainer = "formillaFacebookWebsitePoweredBy");
}
function FormillaFacebookScrollBoxWidget() {
  FormillaFacebookBaseWidget.call(this),
    (this.ClassName = "FormillaFacebookScrollBoxWidget"),
    (this.ModalContainerId = "divFormillaFacebookScrollBoxWidgetContainer"),
    (this.WidgetContainer = "formillaFacebookScrollBoxWidgetContainer"),
    (this.CloseElementId = "formillaFacebookScrollBoxClose"),
    (this.FacebookIframeId = "formillaFacebookScrollBoxIframe"),
    (this.FacebookBodyContainerId = "formillaFacebookScrollBoxBodyContainer"),
    (this.PoweredByContainer = "formillaFacebookScrollBoxPoweredBy");
}
function FormillaTwitterBaseWidget() {
  FormillaWidget.call(this),
    (this.TwitterUserFollowedCookieKey = "formillaEdgeTwitterUserFollowed"),
    (this.ModalContainerId = ""),
    (this.WidgetContainer = ""),
    (this.CloseElementId = ""),
    (this.TwitterIframeId = ""),
    (this.TwitterBodyContainerId = ""),
    (this.PoweredByContainer = ""),
    (this.BlurEventFtn = null);
}
function FormillaTwitterModalWidget() {
  FormillaTwitterBaseWidget.call(this),
    (this.ClassName = "FormillaTwitterModalWidget"),
    (this.ModalContainerId = "divFormillaTwitterModalWidgetContainer"),
    (this.WidgetContainer = "formillaTwitterPopupContainer"),
    (this.CloseElementId = "formillaTwitterClose"),
    (this.TwitterIframeId = "formillaTwitterPopupIframe"),
    (this.TwitterBodyContainerId = "formillaTwitterBodyContainer"),
    (this.PoweredByContainer = "formillaTwitterPoweredby");
}
function FormillaTwitterWebsiteBarWidget() {
  FormillaTwitterBaseWidget.call(this),
    (this.ClassName = "FormillaTwitterWebsiteBarWidget"),
    (this.ModalContainerId = "divFormillaTwitterWebsiteBarWidgetContainer"),
    (this.WidgetContainer = "formillaTwitterWebsiteWidget"),
    (this.CloseElementId = "formillaTwitterWebsiteClose"),
    (this.TwitterIframeId = "formillaTwitterWebsiteIframe"),
    (this.TwitterBodyContainerId = "formillaTwitterWebsiteBodyContainer"),
    (this.PoweredByContainer = "formillaTwitterWebsitePoweredBy");
}
function FormillaTwitterScrollboxWidget() {
  FormillaTwitterBaseWidget.call(this),
    (this.ClassName = "FormillaTwitterScrollboxWidget"),
    (this.ModalContainerId = "divFormillaTwitterScrollBoxWidgetContainer"),
    (this.WidgetContainer = "formillaTwitterScrollBoxWidgetContainer"),
    (this.CloseElementId = "formillaTwitterScrollBoxClose"),
    (this.TwitterIframeId = "formillaTwitterScrollBoxIframe"),
    (this.TwitterBodyContainerId = "formillaTwitterScrollBoxBodyContainer"),
    (this.PoweredByContainer = "formillaTwitterScrollBoxPoweredBy");
}
function FormillaCustomBaseWidget() {
  FormillaWidget.call(this),
    (this.CustomClickedCookieKey = "formillaEdgeCustomClicked"),
    (this.ModalContainerId = ""),
    (this.WidgetContainer = ""),
    (this.CloseElementId = ""),
    (this.ContinueBtnId = ""),
    (this.CustomBodyContainerId = ""),
    (this.PoweredByContainer = ""),
    (this.ClickEventFtn = null);
}
function FormillaCustomModalWidget() {
  FormillaCustomBaseWidget.call(this),
    (this.ClassName = "FormillaCustomModalWidget"),
    (this.ModalContainerId = "divFormillaCustomModalWidgetContainer"),
    (this.WidgetContainer = "formillaCustomPopupContainer"),
    (this.CloseElementId = "formillaCustomClose"),
    (this.ContinueBtnId = "formillaCustomSubscribeSubmitBtn"),
    (this.CustomBodyContainerId = "formillaCustomBodyContainer"),
    (this.PoweredByContainer = "formillaCustomPoweredby"),
    (this.ConversionBtnClass = "formillaCustomSubscribeBtn");
}
function FormillaCustomWebsiteBarWidget() {
  FormillaCustomBaseWidget.call(this),
    (this.ClassName = "FormillaCustomWebsiteBarWidget"),
    (this.ModalContainerId = "divFormillaCustomWebsiteBarWidgetContainer"),
    (this.WidgetContainer = "formillaCustomWebsiteWidget"),
    (this.CloseElementId = "formillaCustomWebsiteClose"),
    (this.ContinueBtnId = "formillaCustomWebsiteSubscribeSubmitBtn"),
    (this.CustomBodyContainerId = "formillaCustomWebsiteBodyContainer"),
    (this.PoweredByContainer = "formillaCustomWebsitePoweredBy"),
    (this.ConversionBtnClass = "formillaCustomWebsiteWidgetBtn");
}
function FormillaCustomScrollBoxWidget() {
  FormillaCustomBaseWidget.call(this),
    (this.ClassName = "FormillaCustomScrollBoxWidget"),
    (this.ModalContainerId = "divFormillaCustomScrollBoxWidgetContainer"),
    (this.WidgetContainer = "formillaCustomScrollBoxWidgetContainer"),
    (this.CloseElementId = "formillaCustomScrollBoxClose"),
    (this.ContinueBtnId = "formillaCustomScrollBoxSubscribeSubmitBtn"),
    (this.CustomBodyContainerId = "formillaCustomScrollBoxBodyContainer"),
    (this.PoweredByContainer = "formillaCustomScrollBoxPoweredBy"),
    (this.ConversionBtnClass = "formillaCustomScrollBoxSubscribeBtn");
}
function FormillaBaseLiveChatWidget() {
  (this.updateChatMessageContainerHeightOnAdjust = !0),
    (this.UserMessageContainerClass = ""),
    (this.AgentMessageContainerClass = ""),
    (this.SentStatusContainerId = ""),
    (this.ReadStatusContainerId = ""),
    (this.StylesheetId = "formilla-styles"),
    (this.MobileStylesheetId = "formilla-mobile-styles");
}
function FormillaLiveChatWidgetV1() {
  FormillaBaseLiveChatWidget.call(this),
    (this.AgentMessageContainerClass = "formillaAdminMessageCtr");
}
function FormillaLiveChatWidgetV2() {
  FormillaBaseLiveChatWidget.call(this),
    (this.AgentMessageContainerClass = "formillaAdminMessageCtr");
}
function FormillaLiveChatWidgetV3() {
  FormillaBaseLiveChatWidget.call(this),
    (this.AgentMessageContainerClass = "right_msg");
}
function FormillaLiveChatWidgetV4() {
  FormillaBaseLiveChatWidget.call(this),
    (this.updateChatMessageContainerHeightOnAdjust = !1),
    (this.MainChatContainerId = "divFormillaChat"),
    (this.InitialStateHeader = "ch-content-home"),
    (this.ChatHeader = "chatHeader"),
    (this.ChatMessagesScrollContainer = "content"),
    (this.ChatMessagesContainer = "divFormillaChatMessagesContainer"),
    (this.ChatMessagesDivId = "divFormillaChatMessages"),
    (this.InitialStateContainerBackgroundId =
      "initialStateContainerBackground"),
    (this.MobilePowerById = "mobilePowerBy"),
    (this.AgentIsTypingImgId = "formillaAgentIsTypingImage"),
    (this.AgentIsTypingInitialId = "agentIsTypingInitial"),
    (this.UserMessageContainerClass = "ch-send-chat"),
    (this.AgentMessageContainerClass = "ch-receive-chat"),
    (this.SentStatusContainerId = "sentStatusContainer"),
    (this.ReadStatusContainerId = "readStatusContainer"),
    (this.PreChatContainer = "formillaPrechatContainer"),
    (this.RequestEmailAddressContainerId = "requestEmailAddressContainer"),
    (this.RequestEmailAddressInputId = "requestEmailAddressInput"),
    (this.SnippetContainerId = "snippetContainer"),
    (this.SnippetMessageContainerId = "snippetMessage"),
    (this.SnippetBadgeNumberContainerId = "snippetBadgeNumber"),
    (this.ChatStatePowerByContainerId = "chatStatePowerByContainer"),
    (this.ChatHeaderAgentImageContainerId = "spnChatHeaderAgentPictures"),
    (this.ChatHeaderWelcomeMessageContainerId = "chatHeaderWelcomeMessage"),
    (this.ChatHeaderTypicallyRespondsContainerId =
      "chatHeaderTypicallyResponds"),
    (this.ChatHeaderPreChatContainerId = "chatHeaderPreChat"),
    (this.ChatHeaderChatSessionContainerId = "chatHeaderChatSession"),
    (this.ChatHeaderAgentNameContainerId = "chatHeaderAgentName"),
    (this.ChatHeaderAgentTitleContainerId = "chatHeaderAgentTitle"),
    (this.ChatHeaderAgentBioContainerId = "chatHeaderAgentBio"),
    (this.ChatInputDisabledOverlay = "chatInputDisabledOverlay"),
    (this.AgentBioVisibilityInterval = null),
    (this.MaxWidgetHeight = 606),
    (this.MaxWidgetWidth = 401),
    (this.snippetBadgeNumber = 0),
    (this.wasLastMessageAnAM = !1),
    (this.wasLastMessageAChatRequest = !1),
    (this.snippetSateCookieKey = "snippetState"),
    (this.widgetShowAnimationDelay = 400),
    (this.chatBtnShowAnimationDelay = 400),
    (this.snippetShowAnimationDelay = 400),
    (this.snippetRestoreAnimationDelay = 500),
    (this.newMeesageAnimationDelay = 400),
    (this.sentReadAnimationDelay = 500),
    (this.bioAnimationDelay = 400),
    (this.chatBotResponseDelay = 1500),
    (this.FormillaChatCtrClickEventFtn = null);
}
function FileAttachmentControlWidgetV4(options) {
  FileAttachmentControl.call(this, {
    secureReferrer: options.secureReferrer,
    fileStorageSecureReferrer: options.fileStorageSecureReferrer,
    maxFileAttachments: 1,
    errorMessages: options.errorMessages,
    isEnabled: options.isEnabled,
  });
}
function LoadFileAttachmentControlWidgetV4() {
  (FileAttachmentControlWidgetV4.prototype = Object.create(
    FileAttachmentControl.prototype
  )),
    ((FileAttachmentControlWidgetV4.prototype.constructor =
      FileAttachmentControlWidgetV4).prototype.createFileThumbnail = function (
      sessionid,
      fileGuid,
      file,
      sourceType
    ) {
      FileAttachmentControl.prototype.createFileThumbnail.call(
        this,
        sessionid,
        fileGuid,
        file,
        sourceType
      ),
        $(".ch-footerchatbox").addClass("hasFilePreview"),
        Formilla.liveChatWidgetInstance.updateTextAreaHeight();
    }),
    (FileAttachmentControlWidgetV4.prototype.getFileThumbnailHtml = function (
      fileGuid,
      fileName,
      fileExtension,
      progressClass
    ) {
      var iconElement;
      switch (fileExtension) {
        case this.FileExtensionName.Pdf:
          iconElement =
            "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-pdf' class='svg-inline--fa fa-file-pdf fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z'></path></svg>";
          break;
        case this.FileExtensionName.Txt:
          iconElement =
            "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-alt' class='svg-inline--fa fa-file-alt fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z'></path></svg>";
          break;
        case this.FileExtensionName.Doc:
        case this.FileExtensionName.Docx:
          iconElement =
            "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-word' class='svg-inline--fa fa-file-word fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z'></path></svg>";
          break;
        case this.FileExtensionName.Xls:
        case this.FileExtensionName.Xlsx:
        case this.FileExtensionName.Csv:
          iconElement =
            "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-excel' class='svg-inline--fa fa-file-excel fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z'></path></svg>";
          break;
        default:
          iconElement = "<img/>";
      }
      return $(
        "<div class='thumbnailCtr " +
          progressClass +
          "' fileGuid='" +
          fileGuid +
          "'><div class='thumbnail'><a class='icon' title='" +
          fileName +
          "'>" +
          iconElement +
          "</a><div class='progressIndicator'>0%</div><div class='deleteFileCtr'><div class='deleteFileBg'></div><a id='athumbnail" +
          fileGuid +
          "' class='deleteFile' href='javascript:void(0);' title='Delete File'><svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='times-circle' class='svg-inline--fa fa-times-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z'></path></svg></a></div></div></div>"
      );
    }),
    (FileAttachmentControlWidgetV4.prototype.deleteFileThumbnailCallback =
      function () {
        $(".ch-footerchatbox").removeClass("hasFilePreview"),
          Formilla.liveChatWidgetInstance.updateTextAreaHeight();
      }),
    (FileAttachmentControlWidgetV4.prototype.showFileUploadErrorMessage =
      function (message, className) {
        FileAttachmentControl.prototype.showFileUploadErrorMessage.call(
          this,
          message,
          className
        );
        var that,
          errorContent =
            "<a id='closeErrorMessage' href='javascript:void(0);'><svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='times' class='svg-inline--fa fa-times fa-w-11' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'><path fill='currentColor' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'></path></svg></a><div class='error-msg-icon'><img src='" +
            (Formilla.formillaProtocol() +
              Formilla.formillaDomain +
              "/img/error-img.png") +
            "' /></div><div class='error-msg-content'>" +
            message +
            "</div>";
        $("#divErrorMessage").html(errorContent).css("display", "table"),
          (that = this),
          $("#closeErrorMessage").bind("click", function () {
            that.hideFileUploadErrorMessage();
          });
      }),
    (FileAttachmentControlWidgetV4.prototype.resetFileAttachments = function (
      sessionid,
      isChatEnded
    ) {
      $(".ch-footerchatbox").removeClass("hasFilePreview"),
        FileAttachmentControl.prototype.resetFileAttachments.call(
          this,
          sessionid,
          isChatEnded
        );
    }),
    (FileAttachmentControlWidgetV4.prototype.getActiveChatSessionId =
      function () {
        return Formilla.cookieService.getCookieValue("formillaChatSession");
      }),
    (FileAttachmentControlWidgetV4.prototype.formatAttachmentThumbnails =
      function (fileAttachments) {
        var messages = [];
        this.getActiveChatSessionId();
        if (
          null == fileAttachments ||
          null == fileAttachments ||
          "" == fileAttachments ||
          0 == fileAttachments.length
        )
          return messages;
        for (var i = 0; i < fileAttachments.length; i++) {
          var iconElement,
            file = fileAttachments[i],
            originalNameEscaped = this.escapeQuotes(file.OriginalName),
            fileExtension = file.OriginalName.toLowerCase().split(".").pop(),
            fileUrl = this.getFileUrl(file),
            fileThumbnailUrl = this.getThumbnailUrl(file);
          switch (fileExtension) {
            case this.FileExtensionName.Pdf:
              iconElement =
                "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-pdf' class='svg-inline--fa fa-file-pdf fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z'></path></svg>";
              break;
            case this.FileExtensionName.Txt:
              iconElement =
                "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-alt' class='svg-inline--fa fa-file-alt fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z'></path></svg>";
              break;
            case this.FileExtensionName.Doc:
            case this.FileExtensionName.Docx:
              iconElement =
                "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-word' class='svg-inline--fa fa-file-word fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z'></path></svg>";
              break;
            case this.FileExtensionName.Xls:
            case this.FileExtensionName.Xlsx:
            case this.FileExtensionName.Csv:
              iconElement =
                "<svg aria-hidden='true' focusable='false' data-prefix='far' data-icon='file-excel' class='svg-inline--fa fa-file-excel fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path fill='currentColor' d='M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z'></path></svg>";
              break;
            default:
              iconElement = "<img src='" + fileThumbnailUrl + "' />";
          }
          var html =
            "<span class='fileThumbnail'><span class='fileIconBg'><a class='fileIcon' target='_blank' title='" +
            originalNameEscaped +
            "' href='" +
            fileUrl +
            "'>" +
            iconElement +
            "</a></span><span class='fileTitle'><a class='fileName' target='_blank' title='" +
            originalNameEscaped +
            "' href='" +
            fileUrl +
            "'>" +
            file.OriginalName +
            "</a></span></span>";
          messages.push(html);
        }
        return messages;
      }),
    (FileAttachmentControlWidgetV4.prototype.showUploadIcon = function () {
      FileAttachmentControl.prototype.showUploadIcon.call(this),
        $(".ch-footerchatbox").addClass("fileAttachmentsEnabled");
    }),
    (FileAttachmentControlWidgetV4.prototype.hideUploadIcon = function () {
      FileAttachmentControl.prototype.hideUploadIcon.call(this),
        $(".ch-footerchatbox").removeClass("fileAttachmentsEnabled");
    });
}
"undefined" != typeof Formilla && (FormillaOrig = Formilla),
  (Formilla = {
    formillaDomain: "www.formilla.com",
    formillaApiDomain: "api.formilla.com/api",
    fileStorageSecureReferrer: "formilla.blob.core.windows.net/",
    csid: 0,
    guid: "",
    customerFirstName: null,
    customerLastName: null,
    customerPhone: null,
    customerEmail: null,
    userId: null,
    customField1: null,
    customField2: null,
    customField3: null,
    signedUp_date: null,
    isUnsubscribed: null,
    isChatShown: "",
    hasAgentResponded: !1,
    chatButton: "",
    startMessageContainer: "",
    chatMessagesContainer: "",
    agentIsTypingContainer: "",
    agentIsTypingMessage: "",
    agentIsTypingImage: "",
    lastChatMessageTimestamp: "",
    chatTextbox: "",
    spanChatEmailTextbox: "",
    spanChatEmailTextboxError: "",
    chatEmailTextbox: "",
    chatEmailTextboxValidator: "",
    chatEmailTextboxContainer: "",
    popupFooterBottom: "",
    popupChatFooter: "",
    agentTypingBar: "",
    startChat: 0,
    emailBoxContainer: "",
    spanEmailTextbox: "",
    emailTextbox: "",
    emailTextboxValidator: "",
    spanEmailMessage: "",
    emailMessage: "",
    emailMessageValidator: "",
    emailUsButton: "",
    sendButton: "",
    startChatButton: "",
    responseBoxContainer: "",
    spanFormillaResponseMessage: "",
    isChatMessageStyleInline: !0,
    chatPopupTextColor: "",
    userChatMessageBackgroundColor: "",
    userChatMessageTextColor: "",
    chatPopupButtonTextColor: "",
    chatPopupButtonColor: "",
    chatPopupButtonMouseoverColor: "",
    userChatMessageLabel: "Me",
    autoMessageTitle: "",
    autoDisplayMessageId: "",
    wixPageUrl: "",
    headerIcon: "",
    offlineButtonText: "",
    _lastAction: 0,
    _startX: 0,
    _startY: 0,
    _offsetX: 0,
    _offsetY: 0,
    _dragElement: "",
    _oldZIndex: 2147483646,
    _debug: document.getElementById("_debug"),
    contentElement: "",
    contentWidth: 0,
    contentHeight: 0,
    sctop: 0,
    scleft: 0,
    winwidth: 0,
    winheight: 0,
    buttonLocation: 0,
    maxResolutionForMobile: 767,
    pollTimer: "",
    proactiveTimer: "",
    autoResponderTimer: "",
    pollForActionTimer: "",
    handleWixStylesTimer: "",
    isProactive: !1,
    isRequestChat: !1,
    isActionPolling: !1,
    isMobile: "",
    hasMobileCSS: !1,
    mobileCSSSubtractFromHeight: 0,
    isIframe: "",
    isUserTyping: "",
    isEmailRequiredToChat: !1,
    isAttnGrabberVisible: !1,
    widgetVersion: "",
    defaultChatMessageCtrHeight: "180px",
    cart: "",
    cookieService: null,
    disableChat: !1,
    googleAnalyticService: null,
    newMessageNotificationMp3: null,
    newMessageNotificationWav: null,
    isDirectLinkMode: !1,
    contactCustomAttributes: null,
    contactAttributes: null,
    onLoadChat: null,
    isEditor: !1,
    isPreviewMode: !1,
    contactData: null,
    loadFinished: !1,
    contactHmac: "",
    isRestartChat: !1,
    chatBtnLocationStyles: null,
    widgetLocationStyles: null,
    proactivePopupLocationStyles: null,
    snippetLocationStyles: null,
    runningOnIframe: !1,
    liveChatWidgetInstance: null,
    chatPopupMessageSentText: "",
    chatPopupMessageReadText: "",
    lastAgentViewedTimestamp: 0,
    lastVisitorViewedTimestamp: 0,
    widgetStyles: null,
    widgetMobileStyles: null,
    resizeEventTimeout: null,
    autoMessageClicked: !1,
    showPreChatFieldsForSmartMessage: !1,
    isRequireEmailAddressEnabled: !1,
    requireEmailAddressText: "",
    wasRequestEmailShown: !1,
    queueNumber: null,
    originalParentViewport: null,
    isBottomLeftLocation: !1,
    wixIframeCoordinates: null,
    AdjustChatButtonWidth: !1,
    isCustomBotDisplayed: !1,
    isCalendlyLoaded: !1,
    isLocalStorage: !1,
    isCloudflarePreview: !1,
    isCloudflareEditor: !1,
    fileAttachmentControl: null,
    isSPA: !1,
    isSPAguid: "",
    isForcedSSL: !1,
    isFormillaLoaded: !1,
    widgetInstances: null,
    location: null,
    loadWidgets: function () {
      Formilla.loadFormillaChatButton();
    },
    Unload: function () {
      if (Formilla.isFormillaLoaded) {
        if (null != Formilla.widgetInstances)
          for (var i = 0; i < Formilla.widgetInstances.length; i++) {
            var widget = Formilla.widgetInstances[i];
            widget.wasWidgetInitialize
              ? widget.onCloseClick(widget.ModalContainerId)
              : (widget.wasWidgetInitialize = !0),
              Formilla.FormillaRemoveElement(
                document.getElementById(widget.ModalContainerId)
              );
          }
        Formilla.FormillaRemoveElement(
          document.getElementById("formilla-frame")
        ),
          (Formilla.guid = Formilla.isSPAguid),
          (Formilla.loadFinished = !1),
          (Formilla.isFormillaLoaded = !1),
          (Formilla.widgetInstances = null);
      }
    },
    loadFormillaChatButton: function () {
      if (Formilla.isSPA) {
        if (Formilla.isFormillaLoaded)
          return void console.log("duplicated script detected");
        (Formilla.isSPAguid = Formilla.guid.trim()),
          (Formilla.isFormillaLoaded = !0),
          (Formilla.widgetInstances = []);
      } else
        Formilla.loadFormillaChatButton = function () {
          console.log("duplicated script detected");
        };
      if (
        ((Formilla.location = document.location),
        (Formilla.guid = Formilla.guid.trim()),
        Formilla.isCloudflarePreviewMode(),
        !Formilla.FormillaCheckCookiesEnabled() &&
          !Formilla.FormillaIsSearchBot())
      )
        return !1;
      Formilla.setFormillaContactAttributes(Formilla.contactAttributes),
        (Formilla.cookieService = new FormillaLiveChatCookieService());
      var cookieServ = new FormillaCookieService(),
        edgeWidget = new FormillaWidget(),
        emailWidget = new FormillaEmailModalWidget(),
        facebookWidget = new FormillaFacebookBaseWidget(),
        twitterWidget = new FormillaTwitterBaseWidget();
      new FormillaCustomBaseWidget();
      Formilla.initFormillaMobile();
      var oldVisitorGuid = Formilla.cookieService.getCookieValue(
        "formillaVisitorGuid"
      );
      oldVisitorGuid &&
        (Formilla.cookieService.addCookie(
          "formillaVisitorGuid",
          oldVisitorGuid
        ),
        new FormillaCookieService().deleteCookie("formillaVisitorGuid"));
      var excludedTypes = new Array(),
        edgeEmailSubmitted = cookieServ.getCookieValue(
          emailWidget.EmailSubmittedCookieKey
        ),
        edgeFacebookPageLiked = cookieServ.getCookieValue(
          facebookWidget.FacebookPageLikedCookieKey
        ),
        twitterUserFollowed = cookieServ.getCookieValue(
          twitterWidget.TwitterUserFollowedCookieKey
        );
      null != edgeEmailSubmitted &&
        excludedTypes.push(FormillaEdgeWidgetType.Email),
        null != edgeFacebookPageLiked &&
          excludedTypes.push(FormillaEdgeWidgetType.Facebook),
        null != twitterUserFollowed &&
          excludedTypes.push(FormillaEdgeWidgetType.Twitter);
      var excludedTypesParam = excludedTypes.join(),
        displayIds = cookieServ.getCookieValue(edgeWidget.WidgetDisplayList),
        convertedIds = cookieServ.getCookieValue(
          edgeWidget.WidgetConversionList
        ),
        lastDisplay = cookieServ.getCookieValue(
          edgeWidget.WidgetLastDisplayCookieKey
        ),
        isIframe = Formilla.isIframe ? "True" : "False",
        isEditor = Formilla.isEditor ? "True" : "False",
        isDirectLinkMode = Formilla.isDirectLinkMode ? "True" : "False",
        service = new FormillaPublicWebApiService(),
        autoMessagesDisplayed = Formilla.cookieService.getCookieValue(
          "formillaAutoMessageList"
        ),
        autoMessagesOneTimeDisplayed = Formilla.cookieService.getCookieValue(
          "formillaAutoMessageOneTimeList"
        ),
        lastAutoMessageIdDisplayed = Formilla.cookieService.getCookieValue(
          "formillaLastAutoMessageIdDisplayed"
        );
      service.loadFormillaChatButton(
        isIframe,
        excludedTypesParam,
        displayIds,
        convertedIds,
        lastDisplay,
        Formilla.disableChat,
        isEditor,
        isDirectLinkMode,
        autoMessagesDisplayed,
        autoMessagesOneTimeDisplayed,
        lastAutoMessageIdDisplayed,
        Formilla.isBottomLeftLocation,
        function (data) {
          if (data) {
            data.WidgetVersion &&
              ((Formilla.widgetVersion = data.WidgetVersion),
              Formilla.setLiveChatInstance());
            var feedbackScript = document.querySelector(
                'script[src*="/scripts/feedback.js"]'
              ),
              domain = feedbackScript.src.replace(/scripts\/feedback.*/, ""),
              src = feedbackScript.src.replace(/feedback.*/, "feedback.js"),
              body = document.getElementsByTagName("body").item(0),
              iframe = document.createElement("iframe"),
              width = Formilla.liveChatWidgetInstance
                ? Formilla.liveChatWidgetInstance.getInitialIframeWidth()
                : "0px",
              iframeTitle = Formilla.isMobileView(data.MobileChatButtonText)
                ? data.MobileChatButtonText
                : data.IframeTitle;
            iframe.setAttribute("id", "formilla-frame"),
              null != iframeTitle && null != iframeTitle
                ? iframe.setAttribute(
                    "title",
                    iframeTitle.replace(/"/g, "&quot;")
                  )
                : iframe.setAttribute("title", "Chat offline"),
              iframe.setAttribute(
                "style",
                "position: fixed !important; top: auto; margin: 0 !important; padding: 0 !important; width:" +
                  width +
                  "; height: 35px; min-height: 0px; max-height: none !important; min-width: 0px; max-width: none !important; border: 0 none transparent; background: none 0 0 transparent; z-index: 2147483647; display: block !important; opacity: 1; box-shadow: none; visibility: visible; vertical-align: baseline; cursor: auto;"
              ),
              iframe.setAttribute("src", ""),
              iframe.setAttribute("allowtransparency", "true");
            var dependencies = Formilla.liveChatWidgetInstance
                ? Formilla.liveChatWidgetInstance.getScriptDependencies(domain)
                : "",
              styleDep = Formilla.liveChatWidgetInstance
                ? Formilla.liveChatWidgetInstance.getStylesDependencies(domain)
                : "",
              formillaIframeHtml =
                "\n    <!doctype html>\n    <head><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />" +
                ("<script type='text/javascript' src='" +
                  src +
                  "'></script><script> window.onload = function () { Formilla.loadWidget(" +
                  JSON.stringify(data) +
                  "); };</script>" +
                  styleDep +
                  dependencies) +
                "</head>\n    <body style='margin: 0; overflow: hidden;'>\n    </body>\n    </html>";
            if ("" == iframe.srcdoc)
              (iframe.srcdoc = formillaIframeHtml), body.appendChild(iframe);
            else {
              var formillaIframe = body.appendChild(iframe);
              formillaIframe.contentWindow.document.open(
                "text/html",
                "replace"
              ),
                formillaIframe.contentWindow.document.write(formillaIframeHtml),
                formillaIframe.contentWindow.document.close();
            }
            Formilla.cookieService = new FormillaLiveChatCookieService();
          } else "undefined" != typeof Wix && Wix.resizeWindow(0, 0);
        },
        function () {
          console.log("Error loading chat button"),
            (Formilla.loadFinished = !0);
        }
      );
    },
    setIframeScriptProperties: function () {
      var iframeFormilla = Formilla.getChildFormillaObject();
      (iframeFormilla.customerEmail = Formilla.customerEmail),
        (iframeFormilla.customerFirstName = Formilla.customerFirstName),
        (iframeFormilla.customerLastName = Formilla.customerLastName),
        (iframeFormilla.customerPhone = Formilla.customerPhone),
        (iframeFormilla.customField1 = Formilla.customField1),
        (iframeFormilla.customField2 = Formilla.customField2),
        (iframeFormilla.customField3 = Formilla.customField3),
        (iframeFormilla.cart = Formilla.cart),
        (iframeFormilla.contactAttributes = Formilla.contactAttributes),
        (iframeFormilla.contactCustomAttributes =
          Formilla.contactCustomAttributes),
        (iframeFormilla.contactHmac = Formilla.contactHmac),
        iframeFormilla.setFormillaContactAttributes(
          iframeFormilla.contactAttributes
        );
    },
    loginUser: function () {
      var iframeFormilla = Formilla.getChildFormillaObject();
      Formilla.setIframeScriptProperties(), iframeFormilla.loginUserInternal();
    },
    loginUserInternal: function (email) {
      new FormillaPublicWebApiService().loginUser(
        email,
        function (data) {
          data &&
            data.VisitorGuid &&
            Formilla.FormillaWriteVisitorCookieValue(data.VisitorGuid);
        },
        function () {
          console.error("Error login in the user");
        }
      );
    },
    loadWidget: function (data) {
      Formilla.isChildIframe = !0;
      var parentFormilla = Formilla.getParentFormillaObject();
      if (
        ((Formilla.location = parentFormilla.location),
        (Formilla.guid = parentFormilla.guid),
        (Formilla.isForcedSSL = parentFormilla.isForcedSSL),
        (Formilla.customerEmail = parentFormilla.customerEmail),
        (Formilla.customerFirstName = parentFormilla.customerFirstName),
        (Formilla.customerLastName = parentFormilla.customerLastName),
        (Formilla.customerPhone = parentFormilla.customerPhone),
        (Formilla.customField1 = parentFormilla.customField1),
        (Formilla.customField2 = parentFormilla.customField2),
        (Formilla.customField3 = parentFormilla.customField3),
        (Formilla.cart = parentFormilla.cart),
        (Formilla.contactAttributes = parentFormilla.contactAttributes),
        (Formilla.contactCustomAttributes =
          parentFormilla.contactCustomAttributes),
        (Formilla.contactHmac = parentFormilla.contactHmac),
        (Formilla.isCloudflarePreview = parentFormilla.isCloudflarePreview),
        Formilla.isCloudflarePreviewMode(parentFormilla),
        (Formilla.isWix = parentFormilla.isWix),
        (Formilla.isEditor = parentFormilla.isEditor),
        (Formilla.isIframe = parentFormilla.isIframe),
        (Formilla.isBottomLeftLocation = parentFormilla.isBottomLeftLocation),
        (Formilla.wixIframeCoordinates = parentFormilla.wixIframeCoordinates),
        (Formilla.wixPageUrl = parentFormilla.wixPageUrl),
        Formilla.isWix && !Formilla.FormillaCheckCookiesEnabled())
      )
        return (
          parentFormilla.FormillaWriteVisitorCookieValue(data.VisitorGuid),
          void window.parent.window.Wix.resizeWindow(0, 0)
        );
      (Formilla.isDirectLinkMode = parentFormilla.isDirectLinkMode),
        (Formilla.cookieCustomerSiteGuid =
          parentFormilla.cookieCustomerSiteGuid),
        (Formilla.onLoadChat = parentFormilla.onLoadChat),
        (Formilla.runningOnIframe = !0),
        (Formilla.loadWidget = function () {
          console.log("duplicated script detected");
        }),
        (Formilla.loadFinished = !0),
        (parentFormilla.loadFinished = !0),
        Formilla.initFormillaMobile(),
        Formilla.setFormillaContactAttributes(Formilla.contactAttributes),
        Formilla.bindFormillaWindowEvents(),
        Formilla.bindFormillaWindowEventsForIframe(),
        (Formilla.cookieService = new FormillaLiveChatCookieService()),
        Formilla.renderFormillaChatButton(data);
    },
    setBtnStylesToIframe: function () {
      var iframe = window.parent.document.getElementById("formilla-frame"),
        right = "",
        left = "",
        bottom = "0px",
        webkitTransform = "",
        webkitTransformOrigin = "",
        transform = "",
        transformOrigin = "";
      if (null == Formilla.chatBtnLocationStyles) {
        var styles = document.getElementById(
            Formilla.liveChatWidgetInstance.StylesheetId
          ).innerHTML,
          parseStylesResult = Formilla.parseStylesForIframe(
            styles,
            Formilla.liveChatWidgetInstance.getChatButtonLocationClass()
          );
        if (
          ((right = parseStylesResult.right ? parseStylesResult.right : ""),
          (left = parseStylesResult.left ? parseStylesResult.left : ""),
          (bottom = parseStylesResult.bottom
            ? parseStylesResult.bottom
            : "0px"),
          (webkitTransform = parseStylesResult.webkitTransform
            ? parseStylesResult.webkitTransform
            : ""),
          (webkitTransformOrigin = parseStylesResult.webkitTransformOrigin
            ? parseStylesResult.webkitTransformOrigin
            : ""),
          (transform = parseStylesResult.transform
            ? parseStylesResult.transform
            : ""),
          (transformOrigin = parseStylesResult.transformOrigin
            ? parseStylesResult.transformOrigin
            : ""),
          Formilla.hasMobileCSS && Formilla.isMobile.any())
        ) {
          var mobileStyles = document.getElementById(
              "formilla-mobile-styles"
            ).innerHTML,
            parseMobileStylesResult = Formilla.parseStylesForIframe(
              mobileStyles,
              Formilla.liveChatWidgetInstance.getChatButtonLocationClass()
            );
          parseMobileStylesResult.right &&
            (right = parseMobileStylesResult.right),
            parseMobileStylesResult.left &&
              (left = parseMobileStylesResult.left),
            parseMobileStylesResult.bottom &&
              (bottom = parseMobileStylesResult.bottom),
            parseMobileStylesResult.webkitTransform &&
              (webkitTransform = parseMobileStylesResult.webkitTransform),
            parseMobileStylesResult.webkitTransformOrigin &&
              (webkitTransformOrigin =
                parseMobileStylesResult.webkitTransformOrigin),
            parseMobileStylesResult.transform &&
              (transform = parseMobileStylesResult.transform),
            parseMobileStylesResult.transformOrigin &&
              (transformOrigin = parseMobileStylesResult.transformOrigin);
        }
        if (Formilla.chatButton) {
          var element = Formilla.chatButton;
          "bottom-right" == Formilla.buttonLocation
            ? (element.style.setProperty("right", "0px", "important"),
              element.style.setProperty("left", "auto", "important"))
            : "bottom-left" == Formilla.buttonLocation
            ? (element.style.setProperty("right", "auto", "important"),
              element.style.setProperty("left", "0px", "important"))
            : (element.style.setProperty("right", "auto", "important"),
              element.style.setProperty("left", "auto", "important")),
            element.style.setProperty("bottom", "0px", "important"),
            (styles +=
              "#formilla-chat-button-inner { -webkit-transform: none !important; -webkit-transform-origin: unset !important; transform: none !important; transform-origin: none !important;}"),
            (document.getElementById("formilla-styles").innerHTML = styles),
            (Formilla.chatBtnLocationStyles = {
              right: right,
              left: left,
              bottom: bottom,
              transform: transform,
              transformOr: transformOrigin,
            });
        }
      } else
        (right = Formilla.chatBtnLocationStyles.right),
          (left = Formilla.chatBtnLocationStyles.left),
          (bottom = Formilla.chatBtnLocationStyles.bottom),
          (webkitTransform = Formilla.chatBtnLocationStyles.transform),
          (webkitTransformOrigin = Formilla.chatBtnLocationStyles.transformOr),
          (transform = Formilla.chatBtnLocationStyles.transform),
          (transformOrigin = Formilla.chatBtnLocationStyles.transformOr);
      iframe.style.setProperty("right", right, "important"),
        iframe.style.setProperty("left", left, "important"),
        iframe.style.setProperty("bottom", bottom, "important"),
        iframe.style.setProperty("-webkit-transform", webkitTransform),
        iframe.style.setProperty(
          "-webkit-transform-origin",
          webkitTransformOrigin
        ),
        iframe.style.setProperty("transform", transform),
        iframe.style.setProperty("transform-origin", transformOrigin);
    },
    parseStylesForIframe: function (styles, mainCssClassName) {
      for (
        var result = {},
          classStylesRegex = new RegExp(
            ".*" + mainCssClassName + "[^}]*{[^}]*}",
            "g"
          ),
          classStylesResult = null,
          classStyles = "";
        (classStylesResult = classStylesRegex.exec(styles)) &&
          (classStyles += classStylesResult[0]),
          classStylesResult;

      );
      styles = classStyles.replace(/\s+/g, "");
      var rightRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{([^}]*;)?right:(-?\\d*px|-?\\d*%|calc\\([^\\:;]*\\))(!important)?;.*}"
        ),
        leftRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{([^}]*;)?left:(-?\\d*px|-?\\d*%|calc\\([^\\:;]*\\))(!important)?;.*}"
        ),
        bottomRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{([^}]*;)?bottom:(-?\\d*px|-?\\d*%|calc\\([^\\:;]*\\))(!important)?;.*}"
        ),
        wTransformRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{((?!-webkit-transform|}).)*-webkit-transform:(rotate\\(-?\\d*deg\\))(!important)?;.*}"
        ),
        wTransformOriginRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{((?!-webkit-transform-origin|}).)*-webkit-transform-origin:(left|right)(!important)?;.*}"
        ),
        transformRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{((?!transform|}).)*transform:(rotate\\(-?\\d*deg\\))(!important)?;.*}"
        ),
        transformOriginRegex = new RegExp(
          ".*" +
            mainCssClassName +
            "{((?!transform-origin|}).)*transform-origin:(left|right)(!important)?;.*}"
        ),
        rightResult = rightRegex.exec(styles),
        leftResult = leftRegex.exec(styles),
        bottomResult = bottomRegex.exec(styles),
        wTransformResult = wTransformRegex.exec(styles),
        wTransformOriginResult = wTransformOriginRegex.exec(styles),
        transformResult = transformRegex.exec(styles),
        transformOriginResult = transformOriginRegex.exec(styles);
      return (
        (result.right = rightResult ? rightResult[2] : ""),
        (result.left = leftResult ? leftResult[2] : ""),
        (result.bottom = bottomResult ? bottomResult[2] : ""),
        0 <= result.right.indexOf("calc") &&
          (result.right = result.right.replace("-", " - ").replace("+", " + ")),
        0 <= result.left.indexOf("calc") &&
          (result.left = result.left.replace("-", " - ").replace("+", " + ")),
        0 <= result.bottom.indexOf("calc") &&
          (result.bottom = result.bottom
            .replace("-", " - ")
            .replace("+", " + ")),
        (result.webkitTransform = wTransformResult ? wTransformResult[2] : ""),
        (result.webkitTransformOrigin = wTransformOriginResult
          ? wTransformOriginResult[2]
          : ""),
        (result.transform = transformResult ? transformResult[2] : ""),
        (result.transformOrigin = transformOriginResult
          ? transformOriginResult[2]
          : ""),
        result
      );
    },
    parseMediaQueriesFromStyles: function (styles, stylesId) {
      for (
        var match,
          mediaQuery = /@media([^{]+)\{(([\s\S]+?})[^{}]*)}/g,
          mediaQueryToRemove = [],
          mediaQueryStyles = "";
        (match = mediaQuery.exec(styles));

      ) {
        var completeMediaQuery = match[0],
          mediaQueryHeader = match[1],
          mediaQueryBody = match[2],
          parent = window.parent.window;
        (Formilla.isWix &&
          Formilla.evaluateMediaQueryForWix(mediaQueryHeader)) ||
        (!Formilla.isWix && parent.Formilla.evaluteMediaQuery(mediaQueryHeader))
          ? (mediaQueryStyles += mediaQueryBody)
          : mediaQueryToRemove.push(completeMediaQuery);
      }
      var mediaQuerySheet = document.getElementById(stylesId + "-mediaQueries");
      if (null == mediaQuerySheet) {
        var styleElement = document.getElementById(stylesId),
          style = document.createElement("style");
        (style.id = stylesId + "-mediaQueries"),
          (style.type = "text/css"),
          style.appendChild(document.createTextNode(mediaQueryStyles)),
          styleElement.parentElement.insertBefore(
            style,
            styleElement.nextSibling
          );
      } else mediaQuerySheet.innerHTML = mediaQueryStyles;
      for (var i = 0; i < mediaQueryToRemove.length; i++)
        styles = styles.replace(mediaQueryToRemove[i], "");
      document.getElementById(stylesId).innerHTML = styles;
    },
    evaluateMediaQueryForWix: function (mqHeader) {
      var screenWidth = screen.width,
        screenHeight = screen.height,
        result = !1;
      return (
        (mqHeader = mqHeader.replace(/\s+/g, "")) ==
          "only screen and (min-width: 768px) and (max-height: 900px)".replace(
            /\s+/g,
            ""
          ) &&
          768 <= screenWidth &&
          screenHeight <= 900 &&
          (result = !0),
        mqHeader == "only screen and (min-width: 768px)".replace(/\s+/g, "") &&
          767 <= screenWidth &&
          (result = !0),
        mqHeader == "only screen and (min-width: 1367px)".replace(/\s+/g, "") &&
          1367 <= screenWidth &&
          (result = !0),
        mqHeader ==
          "screen and (min-device-width: 1441px)".replace(/\s+/g, "") &&
          1441 <= screenWidth &&
          (result = !0),
        mqHeader == "only screen and (min-width: 1920px)".replace(/\s+/g, "") &&
          1920 <= screenWidth &&
          (result = !0),
        mqHeader ==
          "screen and (-webkit-min-device-pixel-ratio:0)".replace(/\s+/g, "") &&
          (result = !0),
        mqHeader == "all and (-ms-high-contrast:none)".replace(/\s+/g, "") &&
          Formilla.isIE() &&
          (result = !0),
        result
      );
    },
    onWindowResize: function () {
      Formilla.resizeEventTimeout && clearTimeout(Formilla.resizeEventTimeout),
        (Formilla.resizeEventTimeout = setTimeout(function () {
          Formilla.parseMediaQueriesFromStyles(
            Formilla.widgetStyles,
            Formilla.liveChatWidgetInstance.StylesheetId
          ),
            Formilla.hasMobileCSS &&
              Formilla.parseMediaQueriesFromStyles(
                Formilla.widgetMobileStyles,
                Formilla.liveChatWidgetInstance.MobileStylesheetId
              ),
            Formilla.adjustIframeContainer(!0, !0),
            Formilla.liveChatWidgetInstance.onWindowResize();
        }, 300));
    },
    setIframeContainerMinHeight: function (height) {
      window.parent.document
        .getElementById("formilla-frame")
        .style.setProperty("min-height", height, "important");
    },
    setIframeContainerHeight: function (height) {
      window.parent.document
        .getElementById("formilla-frame")
        .style.setProperty("height", height, "important");
    },
    setIframeContainerWidth: function (width) {
      window.parent.document
        .getElementById("formilla-frame")
        .style.setProperty("width", width, "important");
    },
    removeIframeContainerMargins: function () {
      var iframe = window.parent.document.getElementById("formilla-frame"),
        right = "",
        left = "",
        bottom = "";
      if (null == Formilla.widgetLocationStyles) {
        var styles = document.getElementById("formilla-styles").innerHTML,
          parseStylesResult = Formilla.parseStylesForIframe(
            styles,
            Formilla.liveChatWidgetInstance.getChatWidgetLocationClass()
          );
        if (
          ((right = parseStylesResult.right ? parseStylesResult.right : ""),
          (left = parseStylesResult.left ? parseStylesResult.left : ""),
          (bottom = parseStylesResult.bottom
            ? parseStylesResult.bottom
            : "0px"),
          Formilla.hasMobileCSS && Formilla.isMobile.any())
        ) {
          var mobileStyles = document.getElementById(
              "formilla-mobile-styles"
            ).innerHTML,
            parseMobileStylesResult = Formilla.parseStylesForIframe(
              mobileStyles,
              Formilla.liveChatWidgetInstance.getChatWidgetLocationClass()
            );
          parseMobileStylesResult.right &&
            (right = parseMobileStylesResult.right),
            parseMobileStylesResult.left &&
              (left = parseMobileStylesResult.left),
            parseMobileStylesResult.bottom &&
              (bottom = parseMobileStylesResult.bottom);
        }
        var element = Formilla.contentElement;
        Formilla.isDirectLinkMode
          ? (element.style.setProperty("right", "0px", "important"),
            element.style.setProperty("left", "0px", "important"))
          : (right
              ? element.style.setProperty("right", "0px", "important")
              : element.style.setProperty("right", "auto", "important"),
            left
              ? element.style.setProperty("left", "0px", "important")
              : element.style.setProperty("left", "auto", "important"),
            element.style.setProperty("bottom", "0px", "important"),
            Formilla.liveChatWidgetInstance.resetChatWidgetPosition(element)),
          (Formilla.widgetLocationStyles = {
            right: right,
            left: left,
            bottom: bottom,
          });
      } else
        (right = Formilla.widgetLocationStyles.right),
          (left = Formilla.widgetLocationStyles.left),
          (bottom = Formilla.widgetLocationStyles.bottom);
      iframe.style.setProperty("right", right, "important"),
        iframe.style.setProperty("left", left, "important"),
        iframe.style.setProperty("bottom", bottom, "important"),
        iframe.style.setProperty("-webkit-transform", ""),
        iframe.style.setProperty("-webkit-transform-origin", ""),
        iframe.style.setProperty("transform", ""),
        iframe.style.setProperty("transform-origin", "");
    },
    removeProactivePopupMargings: function () {
      var iframe = window.parent.document.getElementById("formilla-frame"),
        right = "",
        left = "",
        bottom = "";
      if (null == Formilla.proactivePopupLocationStyles) {
        var styles = document.getElementById(
            "formilla-mobile-styles"
          ).innerHTML,
          parseStylesResult = Formilla.parseStylesForIframe(
            styles,
            "formillaProactiveMobilePopup"
          );
        (right = parseStylesResult.right ? parseStylesResult.right : ""),
          (left = parseStylesResult.left ? parseStylesResult.left : ""),
          (bottom = parseStylesResult.bottom
            ? parseStylesResult.bottom
            : "0px");
        var element = document.getElementById("formillaProactiveMobilePopup");
        element.style.setProperty("right", "0px", "important"),
          element.style.setProperty("left", "auto", "important"),
          element.style.setProperty("bottom", "2px", "important"),
          (Formilla.proactivePopupLocationStyles = {
            right: right,
            left: left,
            bottom: bottom,
          });
      } else
        (right = Formilla.proactivePopupLocationStyles.right),
          (left = Formilla.proactivePopupLocationStyles.left),
          (bottom = Formilla.proactivePopupLocationStyles.bottom);
      iframe.style.setProperty("right", right, "important"),
        iframe.style.setProperty("left", left, "important"),
        iframe.style.setProperty("bottom", bottom, "important"),
        iframe.style.setProperty("-webkit-transform", ""),
        iframe.style.setProperty("-webkit-transform-origin", ""),
        iframe.style.setProperty("transform", ""),
        iframe.style.setProperty("transform-origin", ""),
        iframe.style.setProperty("left", "0");
    },
    removeSnippetMargings: function () {
      var iframe = window.parent.document.getElementById("formilla-frame"),
        right = "",
        left = "",
        bottom = "";
      if (null == Formilla.snippetLocationStyles) {
        var styles = document.getElementById("formilla-styles").innerHTML,
          parseStylesResult = Formilla.parseStylesForIframe(
            styles,
            Formilla.liveChatWidgetInstance.getSnippetLocationClass()
          );
        if (
          ((right = parseStylesResult.right ? parseStylesResult.right : ""),
          (left = parseStylesResult.left ? parseStylesResult.left : ""),
          (bottom = parseStylesResult.bottom
            ? parseStylesResult.bottom
            : "0px"),
          Formilla.hasMobileCSS && Formilla.isMobile.any())
        ) {
          var mobileStyles = document.getElementById(
              "formilla-mobile-styles"
            ).innerHTML,
            parseMobileStylesResult = Formilla.parseStylesForIframe(
              mobileStyles,
              Formilla.liveChatWidgetInstance.getSnippetLocationClass()
            );
          parseMobileStylesResult.right &&
            (right = parseMobileStylesResult.right),
            parseMobileStylesResult.left &&
              (left = parseMobileStylesResult.left),
            parseMobileStylesResult.bottom &&
              (bottom = parseMobileStylesResult.bottom);
        }
        if (!Formilla.isDirectLinkMode) {
          var element = document.getElementById(
            Formilla.liveChatWidgetInstance.SnippetContainerId
          );
          right
            ? element.style.setProperty("right", "0px", "important")
            : element.style.setProperty("right", "auto", "important"),
            left
              ? element.style.setProperty("left", "0px", "important")
              : element.style.setProperty("left", "auto", "important"),
            element.style.setProperty("bottom", "0px", "important");
        }
        Formilla.snippetLocationStyles = {
          right: right,
          left: left,
          bottom: bottom,
        };
      } else
        (right = Formilla.snippetLocationStyles.right),
          (left = Formilla.snippetLocationStyles.left),
          (bottom = Formilla.snippetLocationStyles.bottom);
      iframe.style.setProperty("right", right, "important"),
        iframe.style.setProperty("left", left, "important"),
        iframe.style.setProperty("bottom", bottom, "important"),
        iframe.style.setProperty("-webkit-transform", ""),
        iframe.style.setProperty("-webkit-transform-origin", ""),
        iframe.style.setProperty("transform", ""),
        iframe.style.setProperty("transform-origin", "");
    },
    setIframeContainerMargins: function () {
      Formilla.setBtnStylesToIframe();
    },
    adjustIframeContainer: function (
      doNotHideBeforeResize,
      doNotHideChatButtonBeforeResize
    ) {
      Formilla.isEditor ||
        (Formilla.contentElement &&
          !doNotHideBeforeResize &&
          (Formilla.contentElement.style.visibility = "hidden"),
        Formilla.chatButton &&
          !doNotHideChatButtonBeforeResize &&
          (Formilla.chatButton.style.visibility = "hidden"),
        setTimeout(function () {
          Formilla.setIframeContainerHeightToWidgetHeight(),
            Formilla.setIframeContainerWidthToWidgetWidth(),
            Formilla.contentElement &&
              ((Formilla.contentElement.style.visibility = "visible"),
              (Formilla.contentElement.style.overflow = "")),
            Formilla.chatButton &&
              (Formilla.chatButton.style.visibility = "visible");
        }, 50));
    },
    adjustIframeContainerForWixEditor: function () {
      window.parent.document
        .getElementById("formilla-frame")
        .style.setProperty("right", "15px", "important"),
        setTimeout(function () {
          var divFormillaChat = document.getElementById("divFormillaChat");
          Formilla.setIframeContainerHeight("100%"),
            Formilla.setIframeContainerWidth("100%"),
            (divFormillaChat.style.visibility = "visible"),
            Formilla.liveChatWidgetInstance.showChatButtonOnWixEditor() &&
              ((Formilla.chatButton.style.visibility = "visible"),
              (Formilla.chatButton.style.display = "block"));
        }, 100);
    },
    setIframeContainerHeightToWidgetHeight: function () {
      var height;
      if (
        (Formilla.setIframeContainerHeight("100%"),
        Formilla.isMobile.Android() &&
          (Formilla.contentElement &&
          Formilla.contentElement.style &&
          "none" != Formilla.contentElement.style.display
            ? Formilla.setIframeContainerMinHeight(
                Formilla.liveChatWidgetInstance.getChatWidgetMinHeight()
              )
            : Formilla.setIframeContainerMinHeight("0px")),
        Formilla.contentElement &&
          Formilla.contentElement.style &&
          "none" != Formilla.contentElement.style.display)
      )
        (Formilla.isMobile.any() && "1" != Formilla.widgetVersion) ||
        Formilla.isDirectLinkMode ||
        Formilla.liveChatWidgetInstance.useFullWixHeight()
          ? (height = "100%")
          : ((height = Formilla.contentElement.offsetHeight),
            Formilla.contentElement.clientHeight > height &&
              (height = Formilla.contentElement.clientHeight),
            Formilla.isWix &&
              (height =
                Formilla.liveChatWidgetInstance.checkWixMaxHeight(height)),
            (height += "px")),
          Formilla.setIframeContainerHeight(height);
      else if (
        Formilla.chatButton &&
        Formilla.chatButton.style &&
        "none" != Formilla.chatButton.style.display
      ) {
        var btnHeight = Formilla.chatButton.clientHeight;
        Formilla.setIframeContainerHeight(btnHeight + "px");
      } else if (
        "3" != Formilla.widgetVersion ||
        !Formilla.isMobile.any() ||
        (null != Formilla.chatButton &&
          "none" != Formilla.chatButton.style.display)
      ) {
        if (
          Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
          (null == Formilla.chatButton ||
            "none" == Formilla.chatButton.style.display)
        ) {
          var snippetHeight =
            Formilla.liveChatWidgetInstance.getSnippetHeight();
          Formilla.setIframeContainerHeight(snippetHeight + "px"),
            $("#divFormillaChatCtr").height(snippetHeight),
            $("#divFormillaChatCtr").css("cursor", "pointer");
        }
      } else {
        var popupHeight =
          document.getElementById("formillaProactiveMobilePopup").clientHeight +
          2;
        Formilla.setIframeContainerHeight(popupHeight + "px");
      }
    },
    setIframeContainerWidthToWidgetWidth: function () {
      var width;
      if (
        (Formilla.setIframeContainerWidth("380px"),
        Formilla.contentElement &&
          Formilla.contentElement.style &&
          "none" != Formilla.contentElement.style.display)
      )
        Formilla.removeIframeContainerMargins(),
          (Formilla.isMobile.any() && "1" != Formilla.widgetVersion) ||
          Formilla.isDirectLinkMode ||
          Formilla.isWix
            ? (width = "100%")
            : ((width =
                Formilla.contentElement.offsetWidth +
                Formilla.liveChatWidgetInstance.getWidgetExtraContainerWidth()),
              Formilla.contentElement.clientWidth > width &&
                (width = Formilla.contentElement.clientWidth),
              (width += "px")),
          Formilla.setIframeContainerWidth(width);
      else if (
        Formilla.chatButton &&
        Formilla.chatButton.style &&
        "none" != Formilla.chatButton.style.display
      ) {
        Formilla.setIframeContainerMargins();
        var btnWidth = Formilla.chatButton.offsetWidth + 1;
        Formilla.chatButton.clientWidth > btnWidth &&
          (btnWidth = Formilla.chatButton.clientWidth),
          Formilla.AdjustChatButtonWidth
            ? Formilla.isMobile.any()
              ? Formilla.setIframeContainerWidth(btnWidth + 20 + "px")
              : Formilla.setIframeContainerWidth(btnWidth + 40 + "px")
            : Formilla.setIframeContainerWidth(btnWidth + "px");
      } else if (
        "3" != Formilla.widgetVersion ||
        !Formilla.isMobile.any() ||
        (null != Formilla.chatButton &&
          "none" != Formilla.chatButton.style.display)
      ) {
        if (
          Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
          (null == Formilla.chatButton ||
            "none" == Formilla.chatButton.style.display)
        ) {
          var snippetWidth = Formilla.liveChatWidgetInstance.getSnippetWidth();
          Formilla.removeSnippetMargings(),
            Formilla.setIframeContainerWidth(snippetWidth + "px");
        }
      } else
        Formilla.removeProactivePopupMargings(),
          Formilla.setIframeContainerWidth("100%");
    },
    getParentReferrer: function () {
      return window.parent.window.document.referrer;
    },
    setFormillaContactAttributes: function (contactAttributes) {
      contactAttributes &&
        (null != contactAttributes.Email &&
          (Formilla.customerEmail = contactAttributes.Email),
        null != contactAttributes.UserId &&
          (Formilla.userId = contactAttributes.UserId),
        null != contactAttributes.FirstName &&
          (Formilla.customerFirstName = contactAttributes.FirstName),
        null != contactAttributes.LastName &&
          (Formilla.customerLastName = contactAttributes.LastName),
        null != contactAttributes.Phone &&
          (Formilla.customerPhone = contactAttributes.Phone),
        null != contactAttributes.CustomField1 &&
          (Formilla.customField1 = contactAttributes.CustomField1),
        null != contactAttributes.CustomField2 &&
          (Formilla.customField2 = contactAttributes.CustomField2),
        null != contactAttributes.CustomField3 &&
          (Formilla.customField3 = contactAttributes.CustomField3),
        null != contactAttributes.SignedUp_date &&
          (Formilla.signedUp_date = contactAttributes.SignedUp_date),
        null != contactAttributes.IsUnsubscribed &&
          (Formilla.isUnsubscribed = contactAttributes.IsUnsubscribed));
    },
    dynamicJSONTag: function (url) {
      var head = document.getElementsByTagName("head").item(0),
        script = document.createElement("script");
      script.setAttribute("type", "text/javascript"),
        script.setAttribute("src", url),
        head.appendChild(script),
        setTimeout(function () {
          head.removeChild(script);
        }, 1e3);
    },
    getParentFormillaObject: function () {
      return window.parent.window.Formilla;
    },
    getChildFormillaObject: function () {
      return document.getElementById("formilla-frame").contentWindow.Formilla;
    },
    setLiveChatInstance: function () {
      "1" == Formilla.widgetVersion
        ? (Formilla.liveChatWidgetInstance = new FormillaLiveChatWidgetV1())
        : "2" == Formilla.widgetVersion
        ? (Formilla.liveChatWidgetInstance = new FormillaLiveChatWidgetV2())
        : "3" == Formilla.widgetVersion
        ? (Formilla.liveChatWidgetInstance = new FormillaLiveChatWidgetV3())
        : "4" == Formilla.widgetVersion &&
          (Formilla.liveChatWidgetInstance = new FormillaLiveChatWidgetV4());
    },
    renderFormillaChatButton: function (JSONData) {
      if (
        ((Formilla.cookieService = new FormillaLiveChatCookieService()),
        null != JSONData)
      ) {
        if (
          ((Formilla.FormillaApiVersion = JSONData.FormillaApiVersion),
          Formilla.guid && 0 == Formilla.guid.toLowerCase().indexOf("cs")
            ? ((Formilla.csGuid = Formilla.guid),
              (Formilla.guid = JSONData.LiveChatGuid))
            : (Formilla.cookieCustomerSiteGuid = JSONData.csGuid),
          JSONData.GoogleAnalyticAccount &&
            (Formilla.googleAnalyticService = new FormillaGoogleAnalyticService(
              "formillaTracker",
              JSONData.GoogleAnalyticAccount
            )),
          JSONData.Contact && (Formilla.contactData = JSONData.Contact),
          1 == JSONData.IsLiveChatDisabled)
        )
          return (
            (Formilla.cookieCustomerSiteGuid = JSONData.CsGuid),
            Formilla.FormillaWriteVisitorCookieValue(JSONData.VisitorGuid),
            void (
              JSONData.EdgeWidgets &&
              Formilla.processEdgeWidget(JSONData.EdgeWidgets)
            )
          );
        (Formilla.widgetVersion = JSONData.WidgetVersion),
          Formilla.setLiveChatInstance();
        var style,
          head = document.getElementsByTagName("head").item(0);
        if (
          (((style = document.createElement("style")).id = "formilla-styles"),
          (style.type = "text/css"),
          style.appendChild(document.createTextNode(JSONData.LiveChatCSS)),
          head.appendChild(style),
          (Formilla.widgetStyles = JSONData.LiveChatCSS),
          Formilla.liveChatWidgetInstance.addCssStylesOnParent(JSONData),
          Formilla.liveChatWidgetInstance.processMediaQueries(),
          Formilla.isDirectLinkMode && Formilla.onDirectMode(JSONData),
          Formilla.isMobile.any() &&
            null != JSONData.MobileCSS &&
            0 < JSONData.MobileCSS.length &&
            null != JSONData.MobileCSSSubtractFromHeight &&
            0 < JSONData.MobileCSSSubtractFromHeight.length)
        )
          (Formilla.hasMobileCSS = !0),
            (Formilla.mobileCSSSubtractFromHeight = parseInt(
              JSONData.MobileCSSSubtractFromHeight
            )),
            ((style = document.createElement("style")).id =
              "formilla-mobile-styles"),
            (style.type = "text/css"),
            style.styleSheet
              ? (style.styleSheet.cssText = JSONData.MobileCSS)
              : style.appendChild(document.createTextNode(JSONData.MobileCSS)),
            head.appendChild(style),
            (Formilla.widgetMobileStyles = JSONData.MobileCSS),
            Formilla.parseMediaQueriesFromStyles(
              Formilla.widgetMobileStyles,
              Formilla.liveChatWidgetInstance.MobileStylesheetId
            );
        "3" == Formilla.widgetVersion
          ? Formilla.isDirectLinkMode
            ? (Formilla.defaultChatMessageCtrHeight =
                Formilla.getFormillaWindowHeight() -
                Formilla.mobileCSSSubtractFromHeight +
                "px")
            : (Formilla.defaultChatMessageCtrHeight = "230px")
          : (Formilla.defaultChatMessageCtrHeight = "180px");
        var body = document.getElementsByTagName("body").item(0),
          divFormillaChatButton = document.createElement("div"),
          divFormillaChatContainer = document.createElement("div");
        divFormillaChatContainer.setAttribute("id", "divFormillaChatCtr"),
          divFormillaChatButton.setAttribute("id", "formilla-chat-button"),
          (divFormillaChatButton.innerHTML = JSONData.FormillaChatButton),
          (divFormillaChatContainer.innerHTML = JSONData.ChatPopup),
          body.appendChild(divFormillaChatButton),
          body.appendChild(divFormillaChatContainer),
          JSONData.AttentionGrabberHtml &&
            Formilla.addAttentionGrabber(JSONData.AttentionGrabberHtml),
          Formilla.FormillaWriteVisitorCookieValue(JSONData.VisitorGuid),
          "True" == JSONData.DeleteChatCookie &&
            (Formilla.cookieService.deleteCookie("formillaChatSession"),
            (document.getElementById("hdnFormillaSessionId").value = ""),
            Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
              Formilla.liveChatWidgetInstance.deleteSnippetState()),
          "True" == JSONData.IsEmailRequiredToChat &&
            (Formilla.isEmailRequiredToChat = !0),
          "True" == JSONData.PollForAction &&
            ((Formilla.isActionPolling = !0),
            (window.parent.document.onmousemove =
              Formilla.FormillaChatUpdateLastAction),
            Formilla.FormillaChatUpdateLastAction(null)),
          "no" ==
            Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen") &&
            Formilla.cookieService.deleteCookie("formillaIsChatWindowOpen"),
          (Formilla.chatButton = document.getElementById(
            "formilla-chat-button-inner"
          )),
          (Formilla.buttonLocation = JSONData.ButtonLocation),
          Formilla.setBtnStylesToIframe(),
          (Formilla.showPreChatFieldsForSmartMessage =
            JSONData.ShowPreChatFieldsForSmartMessage),
          (Formilla.isRequireEmailAddressEnabled =
            JSONData.IsRequireEmailAddressEnabled),
          (Formilla.requireEmailAddressText = JSONData.RequireEmailAddressText),
          (Formilla.wasRequestEmailShown =
            JSONData.WasEmailRequestFeatureFired),
          (Formilla.AdjustChatButtonWidth = JSONData.AdjustChatButtonWidth),
          Formilla.liveChatWidgetInstance.hasAnimations() &&
            Formilla.liveChatWidgetInstance.showChatButtonAnimation(),
          document.getElementById("hdnFormillaSessionId").value.length <= 0
            ? "True" == JSONData.HasAgentRequestedChat
              ? Formilla.FormillaProcessAgentRequestedChat(JSONData, !0)
              : null != JSONData.AutoMessages &&
                Formilla.AutoPopUpFormillaChat(JSONData)
            : Formilla.FormillaShowMinimizeButton(!0),
          "True" == JSONData.ShowEmailForm
            ? (Formilla.isChatShown = !1)
            : (Formilla.isChatShown = !0),
          Formilla.isMobileView(JSONData.MobileChatButtonText) &&
            (document.getElementById("formilla-chat-button-text").innerHTML =
              JSONData.MobileChatButtonText),
          "True" == JSONData.IsChatMessageStyleInline
            ? (Formilla.isChatMessageStyleInline = !0)
            : (Formilla.isChatMessageStyleInline = !1),
          (Formilla.chatPopupTextColor = JSONData.ChatPopupTextColor),
          (Formilla.userChatMessageBackgroundColor =
            JSONData.UserChatMessageBackgroundColor),
          (Formilla.userChatMessageTextColor =
            JSONData.UserChatMessageTextColor),
          (Formilla.chatPopupButtonTextColor =
            JSONData.ChatPopupButtonTextColor),
          (Formilla.chatPopupButtonColor = JSONData.ChatPopupButtonColor),
          (Formilla.chatPopupButtonMouseoverColor =
            JSONData.ChatPopupButtonMouseoverColor),
          (Formilla.offlineButtonText = JSONData.OfflineButtonText),
          (Formilla.chatPopupMessageSentText =
            JSONData.ChatPopupMessageSentText),
          (Formilla.chatPopupMessageReadText =
            JSONData.ChatPopupMessageReadText),
          (Formilla.userChatMessageLabel = JSONData.UserChatMessageLabel),
          0 < document.getElementById("hdnFormillaSessionId").value.length &&
            "True" != JSONData.SupressChatAutoShow &&
            ("yes" !=
              Formilla.cookieService.getCookieValue("formillaIsMinimized") &&
              Formilla.hideLiveChatBtn(),
            (Formilla.lastAgentViewedTimestamp =
              JSONData.LastAgentViewedTimestamp),
            (Formilla.lastVisitorViewedTimestamp =
              JSONData.LastVisitorViewedTimestamp),
            Formilla.liveChatWidgetInstance.hasMessageStatusFeature() &&
              (Formilla.liveChatWidgetInstance.markLastMessageAsSent(
                Formilla.chatPopupMessageSentText
              ),
              0 < Formilla.lastAgentViewedTimestamp &&
                Formilla.liveChatWidgetInstance.markLastMessageAsRead(
                  Formilla.chatPopupMessageReadText,
                  Formilla.lastAgentViewedTimestamp
                )),
            Formilla.AutoInitFormillaChat(),
            Formilla.FormillaAdjustHeight(Formilla.defaultChatMessageCtrHeight),
            null != JSONData.autoResponderTimer &&
              0 < JSONData.autoResponderTimer &&
              Formilla.startFormillaAutoResponderTimer(
                JSONData.autoResponderTimer
              ),
            "True" == JSONData.IsStatusDisplay &&
              Formilla.liveChatWidgetInstance.disableChatInput());
        var chatButtonBottom = Formilla.chatButton
          ? parseInt(Formilla.FormillaGetStyle(Formilla.chatButton, "bottom"))
          : 0;
        if (
          (Formilla.showAttentionGrabber(),
          document.getElementById("hdnFormillaSessionId").value.length <= 0 &&
            "True" == JSONData.HasAgentRequestedChat &&
            Formilla.hideAttnGrabberWithoutExpiration(),
          null !=
            Formilla.cookieService.getCookieValue(
              "formillaLastAutoMessageIdDisplayed"
            ) && Formilla.hideAttnGrabberWithoutExpiration(),
          Formilla.isWix && (Wix = window.parent.window.Wix),
          Formilla.isEditor ||
            (document.getElementById("hdnFormillaSessionId").value.length <=
              0 &&
            Formilla.isAttnGrabberVisible &&
            !Formilla.isProactive
              ? Formilla.FormillaResizeIframeContainer(!1, !0)
              : document.getElementById("hdnFormillaSessionId").value.length <=
                  0 &&
                !Formilla.isProactive &&
                Formilla.liveChatWidgetInstance.hasAttentionGrabberFeature() &&
                Formilla.FormillaResizeIframeContainer(!1, !1)),
          chatButtonBottom < 0 &&
            setTimeout(function () {
              Formilla.slideUpFormillaChatButton(chatButtonBottom);
            }, 1e3),
          Formilla.FormillaAdjustHeightForMobile(),
          Formilla.convertFormillaChatMessageTime(),
          JSONData.EdgeWidgets &&
            Formilla.processEdgeWidget(JSONData.EdgeWidgets),
          JSONData.HasAgentResponded &&
            (Formilla.hasAgentResponded = JSONData.HasAgentResponded),
          Formilla.isDirectLinkMode)
        )
          Formilla.FormillaShowChatWidget(),
            Formilla.cookieService.getCookieValue("formillaChatSession") ||
              Formilla.hideCloseBtn();
      }
      if (
        (null != Formilla.onLoadChat &&
          "function" == typeof Formilla.onLoadChat &&
          Formilla.onLoadChat(),
        Formilla.isWix)
      ) {
        Wix = window.parent.window.Wix;
        var iframe = window.parent.document.getElementById("formilla-frame");
        Formilla.FormillaHideElement(iframe),
          Formilla.setupWixEditWidget(),
          Formilla.handleWixStyles();
        var wasFormillaChatShown =
          Formilla.contentElement &&
          Formilla.contentElement.style &&
          "none" != Formilla.contentElement.style.display;
        Formilla.isEditor ||
          Formilla.FormillaResizeIframeContainer(
            wasFormillaChatShown,
            Formilla.isAttnGrabberVisible
          ),
          setTimeout(function () {
            clearTimeout(Formilla.handleWixStylesTimer);
          }, 5e3);
      }
      Formilla.liveChatWidgetInstance.onRender(JSONData.FileAttachments),
        Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
          !Formilla.isDirectLinkMode &&
          !Formilla.isChatWidgetVisible() &&
          Formilla.cookieService.getCookieValue("formillaChatSession") &&
          Formilla.liveChatWidgetInstance.restoreSnippetState(),
        Formilla.adjustIframeContainer(),
        Formilla.liveChatWidgetInstance.hasMessageAgentPictureFeature() &&
          Formilla.liveChatWidgetInstance.setLastAgentImgVisibility();
    },
    addCssStylesOnParent: function (styles) {
      var head = window.parent.document.getElementsByTagName("head").item(0),
        style = document.createElement("style");
      (style.type = "text/css"),
        style.appendChild(document.createTextNode(styles)),
        head.appendChild(style);
    },
    setupWixEditWidget: function () {
      var parent = window.parent.window;
      "editor" == Wix.Utils.getViewMode()
        ? ((Formilla.isEditor = !0),
          (Formilla.isPreviewMode = !1),
          Formilla.liveChatWidgetInstance.handleWixEditorDisplay(),
          parent.setHideInEditor(),
          Formilla.adjustIframeContainerForWixEditor())
        : "preview" == parent.Wix.Utils.getViewMode() &&
          ((Formilla.isEditor = !1),
          (Formilla.isPreviewMode = !0),
          Formilla.liveChatWidgetInstance.handleWixPreviewDisplay(),
          Formilla.adjustIframeContainer(),
          parent.Wix.resizeWindow(340, 450));
    },
    handleWixStyles: function () {
      var wixStyles =
        window.parent.window.document.getElementsByClassName(
          "wixStylesContainer"
        )[0].innerHTML;
      if (null != /.*\{\s*\{\s*style\./.exec(wixStyles))
        Formilla.handleWixStylesTimer = setTimeout(function () {
          Formilla.handleWixStyles();
        }, 50);
      else {
        Formilla.copyWixStylesToFormillaIframe(wixStyles);
        var iframe = window.parent.document.getElementById("formilla-frame");
        Formilla.FormillaShowElement(iframe), Formilla.adjustIframeContainer();
      }
    },
    copyWixStylesToFormillaIframe: function (wixStyles) {
      var childWixStylesContainer =
        document.getElementById("wixStylesContainer");
      if (!childWixStylesContainer) {
        (childWixStylesContainer = document.createElement("div")).setAttribute(
          "id",
          "wixStylesContainer"
        );
        var body = document.getElementsByTagName("body").item(0),
          firstChild = body.firstElementChild;
        firstChild
          ? body.insertBefore(childWixStylesContainer, firstChild)
          : body.appendChild(childWixStylesContainer);
      }
      wixStyles ||
        (wixStyles =
          window.parent.window.document.getElementsByClassName(
            "wixStylesContainer"
          )[0].innerHTML);
      (childWixStylesContainer.innerHTML = wixStyles),
        Formilla.liveChatWidgetInstance.onWixStylesChange();
    },
    onDirectMode: function (JSONData) {
      var minimizeBtn = document.getElementById("formilla-chat-minimize-link");
      Formilla.FormillaHideElement(minimizeBtn);
      var css = JSONData.DirectLinkModeCSS;
      if (css) {
        var head = document.getElementsByTagName("head").item(0),
          style = document.createElement("style");
        (style.type = "text/css"),
          style.styleSheet
            ? (style.styleSheet.cssText = css)
            : style.appendChild(document.createTextNode(css)),
          head.appendChild(style);
      }
      Formilla.mobileCSSSubtractFromHeight = parseInt(
        JSONData.DirectLinkModeCSSSubtractFromHeight
      );
    },
    showCloseBtn: function () {
      var closeBtn = document.getElementById("formilla-chat-close-link");
      Formilla.FormillaShowElement(closeBtn);
    },
    hideCloseBtn: function () {
      var closeBtn = document.getElementById("formilla-chat-close-link");
      Formilla.FormillaHideElement(closeBtn);
    },
    processEdgeWidget: function (widgets) {
      var parentFormilla = Formilla.getParentFormillaObject();
      parentFormilla.initFormillaMobile(),
        (parentFormilla.csGuid = Formilla.csGuid),
        (parentFormilla.guid = Formilla.guid),
        (parentFormilla.FormillaApiVersion = Formilla.FormillaApiVersion),
        (parentFormilla.cookieCustomerSiteGuid =
          Formilla.cookieCustomerSiteGuid),
        (parentFormilla.googleAnalyticService = Formilla.googleAnalyticService),
        (parentFormilla.contactData = Formilla.contactData),
        parentFormilla.processEdgeWidgetInternal(widgets);
    },
    processEdgeWidgetInternal: function (widgets) {
      for (var i = 0; i < widgets.length; i++) {
        var widget = widgets[i],
          jsWidget = null;
        widget.WidgetType == FormillaEdgeWidgetType.Email
          ? widget.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
            ? ((jsWidget = new FormillaEmailModalWidget()),
              (FormillaEmailModalWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
              FormillaEdgeWidgetDisplayType.WebsiteBar
            ? ((jsWidget = new FormillaEmailWebsiteBarWidget()),
              (FormillaEmailWebsiteBarWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
                FormillaEdgeWidgetDisplayType.ScrollBox &&
              ((jsWidget = new FormillaEmailScrollBoxWidget()),
              (FormillaEmailScrollBoxWidget.Instance = jsWidget))
          : widget.WidgetType == FormillaEdgeWidgetType.Facebook
          ? widget.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
            ? ((jsWidget = new FormillaFacebookModalWidget()),
              (FormillaFacebookModalWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
              FormillaEdgeWidgetDisplayType.WebsiteBar
            ? ((jsWidget = new FormillaFacebookWebsiteBarWidget()),
              (FormillaFacebookWebsiteBarWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
                FormillaEdgeWidgetDisplayType.ScrollBox &&
              ((jsWidget = new FormillaFacebookScrollBoxWidget()),
              (FormillaFacebookScrollBoxWidget.Instance = jsWidget))
          : widget.WidgetType == FormillaEdgeWidgetType.Twitter
          ? widget.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
            ? ((jsWidget = new FormillaTwitterModalWidget()),
              (FormillaTwitterModalWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
              FormillaEdgeWidgetDisplayType.WebsiteBar
            ? ((jsWidget = new FormillaTwitterWebsiteBarWidget()),
              (FormillaTwitterWebsiteBarWidget.Instance = jsWidget))
            : widget.WidgetDisplayType ==
                FormillaEdgeWidgetDisplayType.ScrollBox &&
              ((jsWidget = new FormillaTwitterScrollboxWidget()),
              (FormillaTwitterScrollboxWidget.Instance = jsWidget))
          : widget.WidgetType == FormillaEdgeWidgetType.Custom &&
            (widget.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal &&
              ((jsWidget = new FormillaCustomModalWidget()),
              (FormillaCustomModalWidget.Instance = jsWidget)),
            widget.WidgetDisplayType == FormillaEdgeWidgetDisplayType.WebsiteBar
              ? ((jsWidget = new FormillaCustomWebsiteBarWidget()),
                (FormillaCustomWebsiteBarWidget.Instance = jsWidget))
              : widget.WidgetDisplayType ==
                  FormillaEdgeWidgetDisplayType.ScrollBox &&
                ((jsWidget = new FormillaCustomScrollBoxWidget()),
                (FormillaCustomScrollBoxWidget.Instance = jsWidget))),
          null != jsWidget &&
            ((jsWidget.Model = widget),
            null != Formilla.widgetInstances &&
              Formilla.widgetInstances.push(jsWidget),
            jsWidget.initialize());
      }
    },
    convertFormillaChatMessageTime: function () {
      var elements = document.getElementsByClassName(
        "formillaChatWidgetMessageTime"
      );
      if (elements && 0 < elements.length)
        for (var i = 0; i < elements.length; i++) {
          var date = new Date(elements[i].innerHTML);
          isNaN(date) ||
            (elements[i].innerHTML = Formilla.getFormillaTimeFromUtcDate(date));
        }
    },
    getFormillaTimeFromUtcDate: function (date) {
      var newDate = new Date(
          date.getTime() + 60 * date.getTimezoneOffset() * 1e3
        ),
        offset = date.getTimezoneOffset() / 60,
        hours = date.getHours();
      return (
        newDate.setHours(hours - offset),
        Formilla.formatFormillaMessageDate(newDate)
      );
    },
    formatFormillaMessageDate: function (date) {
      var hour = date.getHours(),
        minute = date.getMinutes();
      return (
        (hour % 12 || 12) +
        ":" +
        (minute < 10 ? "0" + minute : minute) +
        (hour < 12 ? " AM" : " PM")
      );
    },
    slideUpFormillaChatButton: function (chatButtonBottom) {
      (chatButtonBottom += 1),
        (Formilla.chatButton.style.bottom = chatButtonBottom + "px"),
        chatButtonBottom < 0 &&
          setTimeout(function () {
            Formilla.slideUpFormillaChatButton(chatButtonBottom);
          }, 5);
    },
    resetFormillaEmailFields: function () {
      (Formilla.chatTextbox.value = ""),
        Formilla.customerEmail ||
          (null != Formilla.contactData && Formilla.contactData.Email) ||
          (Formilla.emailTextbox.value = ""),
        (Formilla.emailMessage.value = ""),
        (Formilla.spanEmailTextbox.style.display = "block"),
        (Formilla.spanEmailMessage.style.display = "block"),
        (Formilla.responseBoxContainer.style.display = "none"),
        (Formilla.emailTextbox.style.background = "#ffffff"),
        (Formilla.emailMessage.style.background = "#ffffff");
    },
    ShowFormillaChatBox: function () {
      (Formilla.isChatShown = !0),
        (Formilla.chatMessagesContainer.style.display = "block"),
        (Formilla.chatTextbox.style.display = "none"),
        (Formilla.emailBoxContainer.style.display = "none"),
        (Formilla.responseBoxContainer.style.display = "none"),
        (Formilla.sendButton.style.display = "none"),
        (Formilla.chatEmailTextbox.style.display = "inline-block"),
        Formilla.FormillaShowElement(Formilla.chatEmailTextboxContainer),
        Formilla.FormillaShowElement(Formilla.popupFooterBottom),
        Formilla.FormillaHideElement(Formilla.popupChatFooter),
        Formilla.FormillaHideElement(Formilla.agentTypingBar),
        "" == Formilla.chatEmailTextbox.value.trim()
          ? (Formilla.spanChatEmailTextbox.style.display = "block")
          : (Formilla.spanChatEmailTextbox.style.display = "none"),
        (Formilla.startChatButton.style.display = "block");
    },
    ShowFormillaEmailBox: function () {
      (Formilla.isChatShown = !1),
        (Formilla.chatMessagesContainer.style.display = "none"),
        (Formilla.agentIsTypingContainer.style.display = "none"),
        (Formilla.chatTextbox.style.display = "none"),
        (Formilla.emailUsButton.style.display = "none"),
        (Formilla.chatEmailTextbox.style.display = "none"),
        Formilla.FormillaHideElement(Formilla.startMessageContainer),
        Formilla.FormillaHideElement(Formilla.chatEmailTextboxContainer),
        Formilla.FormillaHideElement(Formilla.popupFooterBottom),
        (Formilla.spanChatEmailTextbox.style.display = "none"),
        (Formilla.spanChatEmailTextboxError.style.display = "none"),
        (Formilla.startChatButton.style.display = "none"),
        (Formilla.emailBoxContainer.style.display = ""),
        (Formilla.sendButton.style.display = ""),
        Formilla.customerEmail
          ? ((Formilla.emailTextbox.value = Formilla.customerEmail),
            Formilla.SetFieldAsReadOnly(Formilla.emailTextbox))
          : null != Formilla.contactData &&
            Formilla.contactData.Email &&
            ((Formilla.emailTextbox.value = Formilla.contactData.Email),
            Formilla.contactData.IsContact &&
              Formilla.SetFieldAsReadOnly(Formilla.emailTextbox)),
        Formilla.emailTextbox.value &&
          (Formilla.spanEmailTextbox.innerHTML = ""),
        Formilla.proactiveTimer && window.clearTimeout(Formilla.proactiveTimer),
        "3" == Formilla.widgetVersion &&
          Formilla.FormillaShowElement(Formilla.popupFooterBottom);
    },
    FormillaValidateEmailFields: function () {
      var bValidEmailAddress = Formilla.FormillaValidateEmailAddress(!0),
        bValidEmailMessage = Formilla.FormillaValidateEmailMessage(!0);
      return !(!bValidEmailAddress || !bValidEmailMessage);
    },
    FormillaValidateEmailAddress: function (bShowError) {
      return Formilla.FormillaIsValidEmail(Formilla.emailTextbox.value)
        ? ("3" == Formilla.widgetVersion
            ? (Formilla.emailTextbox.parentElement.className = "formillaFocus")
            : (Formilla.emailTextbox.style.border = "1px solid green"),
          (Formilla.emailTextboxValidator = !0))
        : ((Formilla.emailTextboxValidator || bShowError) &&
            ("3" == Formilla.widgetVersion
              ? (Formilla.emailTextbox.parentElement.className =
                  "formillaError")
              : (Formilla.emailTextbox.style.border = "1px solid red")),
          !1);
    },
    FormillaValidateEmailMessage: function (bShowError) {
      return "" != Formilla.emailMessage.value.trim() &&
        null != Formilla.emailMessage.value
        ? ("3" == Formilla.widgetVersion
            ? (Formilla.emailMessage.parentElement.className = "formillaFocus")
            : (Formilla.emailMessage.style.border = "1px solid green"),
          (Formilla.emailMessageValidator = !0))
        : ((Formilla.emailMessageValidator || bShowError) &&
            ("3" == Formilla.widgetVersion
              ? (Formilla.emailMessage.parentElement.className =
                  "formillaError")
              : (Formilla.emailMessage.style.border = "1px solid red")),
          !1);
    },
    FormillaValidateChatEmailAddress: function (bShowError) {
      return Formilla.FormillaIsValidEmail(Formilla.chatEmailTextbox.value)
        ? ((Formilla.spanChatEmailTextboxError.style.display = "none"),
          "3" == Formilla.widgetVersion
            ? (Formilla.chatEmailTextbox.parentElement.className =
                "formillaFocus")
            : (Formilla.chatEmailTextbox.style.border = "1px solid green"),
          (Formilla.chatEmailTextboxValidator = !0))
        : ((Formilla.chatEmailTextboxValidator || bShowError) &&
            ("3" == Formilla.widgetVersion
              ? (Formilla.chatEmailTextbox.parentElement.className =
                  "formillaError")
              : (Formilla.chatEmailTextbox.style.border = "1px solid red")),
          !1);
    },
    FormillaSendEmail: function () {
      if (Formilla.FormillaValidateEmailFields()) {
        var email = Formilla.emailTextbox.value.trim();
        Formilla.SetFormillaContactDataEmail(email),
          (Formilla.customerEmail ||
            (null != Formilla.contactData &&
              Formilla.contactData.Email &&
              Formilla.contactData.IsContact)) &&
            Formilla.SetFieldAsReadOnly(Formilla.emailTextbox),
          (Formilla.sendButton.style.display = "none"),
          "3" == Formilla.widgetVersion
            ? Formilla.FormillaShowResponseBoxContainer(
                "<div style='text-align:center !important; display: block !important;'><img src='" +
                  Formilla.formillaProtocol() +
                  Formilla.formillaDomain +
                  "/remoteAssets/img/loading.gif' alt='Sending message...' / style='width: 80px;display: inline;'></div>"
              )
            : Formilla.FormillaShowResponseBoxContainer(
                "<br /><br /><br /><br /><div style='text-align:center'><img src='" +
                  Formilla.formillaProtocol() +
                  Formilla.formillaDomain +
                  "/images/form/loader.gif' alt='Sending message...' /></div>"
              ),
          null != Formilla.googleAnalyticService &&
            Formilla.googleAnalyticService.userSendOfflineForm(),
          new FormillaPublicWebApiService().offlineEmail(
            email,
            Formilla.emailMessage.value,
            function (data) {
              data &&
                (data.visitorGuid &&
                  Formilla.FormillaWriteVisitorCookieValue(data.visitorGuid),
                Formilla.FormillaSendEmailCallback(data));
            },
            function () {
              console.log("Error offline email");
            }
          );
      }
    },
    FormillaShowResponseBoxContainer: function (message) {
      (Formilla.chatMessagesContainer.style.display = "none"),
        (Formilla.agentIsTypingContainer.style.display = "none"),
        (Formilla.emailBoxContainer.style.display = "none"),
        (Formilla.responseBoxContainer.style.display = ""),
        (Formilla.spanFormillaResponseMessage.innerHTML = message),
        Formilla.FormillaAdjustHeight("");
    },
    FormillaSendEmailCallback: function (JSONData) {
      null != JSONData &&
        ("3" == Formilla.widgetVersion
          ? Formilla.FormillaShowResponseBoxContainer(
              "<i class='formilla-i-check'></i><p style='font-size: 15px !important; line-height: 20px; font-family: sans-serif !important; color: " +
                Formilla.chatPopupTextColor +
                " !important;'>" +
                JSONData.message +
                "</p><a href='javascript:void(0)' style='font-family: sans-serif !important; cursor:pointer; color:" +
                Formilla.chatPopupButtonTextColor +
                "; background-color:" +
                Formilla.chatPopupButtonColor +
                ";' onclick='Formilla.resetFormillaEmailFields();Formilla.ShowFormillaEmailBox();' onmouseout=\"this.style.backgroundColor = '" +
                Formilla.chatPopupButtonColor +
                "'\" onmouseover=\"this.style.backgroundColor = '" +
                Formilla.chatPopupButtonMouseoverColor +
                "'\">" +
                Formilla.offlineButtonText +
                "</a>"
            )
          : Formilla.FormillaShowResponseBoxContainer(JSONData.message));
    },
    endFormillaChatSession: function (sessionid) {
      var hdnFormillaSessionId = document.getElementById(
          "hdnFormillaSessionId"
        ).value,
        url =
          Formilla.formillaProtocol() +
          Formilla.formillaDomain +
          "/ajaxhandler.aspx?rnd=" +
          Math.random();
      (url =
        url +
        "&f=endFormillaChatSession&hdnFormillaSessionId=" +
        hdnFormillaSessionId +
        "&Guid=" +
        Formilla.guid),
        Formilla.dynamicJSONTag(url);
    },
    hideOrCloseChatWindow: function () {
      document.getElementById("hdnFormillaSessionId").value
        ? Formilla.FormillaMinimizeChatWindow("divFormillaChat")
        : Formilla.hideFormillaChatWindow("divFormillaChat", ""),
        Formilla.liveChatWidgetInstance.hideOrCloseChatWindow();
    },
    hideFormillaChatWindow: function (obj, confirmText) {
      var sessionId = Formilla.cookieService.getCookieValue(
        "formillaChatSession"
      );
      if (
        (Formilla.liveChatWidgetInstance.hasAnimations() ||
          Formilla.FormillaResizeIframeContainer(
            !1,
            Formilla.isAttnGrabberVisible
          ),
        null != sessionId)
      ) {
        var newMessage;
        if (
          (Formilla.hideFormillaEndChatPopup(),
          (Formilla.agentIsTypingMessage.style.display = "none"),
          Formilla.FormillaHideElement(Formilla.agentIsTypingImage),
          Formilla.endFormillaChatSession(sessionId),
          Formilla.cookieService.deleteCookie("formillaChatSession"),
          (document.getElementById("hdnFormillaSessionId").value = ""),
          Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
            Formilla.liveChatWidgetInstance.deleteSnippetState(),
          Formilla.pollTimer && window.clearInterval(Formilla.pollTimer),
          Formilla.cookieService.deleteCookie("formillaIsChatWindowOpen"),
          Formilla.cookieService.deleteCookie("formillaRequestChat"),
          Formilla.FormillaShowMinimizeButton(!1),
          "3" == Formilla.widgetVersion)
        )
          ((newMessage = document.createElement("ul")).innerHTML =
            "<li style='text-align: center !important;'><div style='display: inline-block !important; color: " +
            Formilla.ChatPopupTextColor +
            ";'>Your chat session has ended.</div></li>"),
            Formilla.chatMessagesContainer.appendChild(newMessage.firstChild),
            (Formilla.startChat = 1),
            (Formilla.isRestartChat = !0);
        else
          ((newMessage = document.createElement("div")).innerHTML =
            '<div style="clear:both; color:red; margin-bottom: 7px;">Your chat session has ended.</div>'),
            Formilla.chatMessagesContainer.appendChild(newMessage.firstChild),
            Formilla.ShowFormillaChatBox();
        (Formilla.chatMessagesContainer.scrollTop =
          Formilla.chatMessagesContainer.scrollHeight),
          "3" == Formilla.widgetVersion &&
            (Formilla.headerIcon.className =
              "formilla-i-h-message on formilla-drag"),
          Formilla.isDirectLinkMode && Formilla.hideCloseBtn();
      } else
        Formilla.isProactive &&
          Formilla.cookieService.addSessionCookie(
            "formillaIsChatWindowOpen",
            "no"
          ),
          Formilla.cookieService.deleteCookie("formillaRequestChat"),
          Formilla.isProactive ||
            Formilla.liveChatWidgetInstance.onFormillaMinimizeChatWindow();
      if (
        (Formilla.DeleteAutoMessageCookie(),
        Formilla.isIframe ||
          ((Formilla.contentHeight = Formilla.contentElement.offsetHeight),
          Formilla.FormillaRealignWidget()),
        "3" == Formilla.widgetVersion &&
          Formilla.isMobile.any() &&
          screen.width <= Formilla.maxResolutionForMobile)
      ) {
        var wasFormillaChatShown =
          Formilla.contentElement &&
          Formilla.contentElement.style &&
          "none" != Formilla.contentElement.style.display;
        Formilla.FormillaRemoveMobileOverlayStyles(),
          (document.getElementById("divFormillaChat").className =
            "formilladg formilla-drag chatWidgetMobileHide"),
          Formilla.isDirectLinkMode ||
            setTimeout(function () {
              (document.getElementById(obj).style.display = "none"),
                wasFormillaChatShown && Formilla.adjustIframeContainer();
            }, 600);
      } else
        Formilla.isDirectLinkMode ||
          (Formilla.liveChatWidgetInstance.hasAnimations()
            ? Formilla.liveChatWidgetInstance.closeWidgetAnimation()
            : (document.getElementById(obj).style.display = "none"),
          Formilla.FormillaRemoveMobileOverlayStyles());
      Formilla.isDirectLinkMode ||
        (Formilla.showLiveChatBtn(!0),
        Formilla.isChatShown
          ? Formilla.showAttnGrabber()
          : Formilla.showOfflineAttnGrabber());
      var doNotHideBeforeResize = Formilla.isMobile.any();
      Formilla.liveChatWidgetInstance.hasAnimations() ||
        Formilla.adjustIframeContainer(doNotHideBeforeResize);
    },
    showFormillaEndChatPopup: function (obj, confirmText) {
      var sessionId = Formilla.cookieService.getCookieValue(
        "formillaChatSession"
      );
      "1" == Formilla.widgetVersion &&
      Formilla.isMobile.ipad() &&
      null != sessionId
        ? Formilla.FormillaMinimizeChatWindow("divFormillaChat")
        : null != sessionId
        ? ((document.getElementById("formillaEndChatAlert").innerHTML =
            confirmText),
          (document.getElementById("formillaEndChatPopup").style.display =
            "block"))
        : Formilla.hideFormillaChatWindow(obj, confirmText);
    },
    hideFormillaEndChatPopup: function () {
      var popup = document.getElementById("formillaEndChatPopup");
      popup && (popup.style.display = "none");
    },
    AutoPopUpFormillaChat: function (JSONData) {
      var persistentCustomBotId = null;
      if (
        null != JSONData.AutoMessages &&
        null != JSONData.AutoMessages &&
        0 < JSONData.AutoMessages.length
      )
        for (var i = 0; i < JSONData.AutoMessages.length; i++) {
          var autoMessage = JSONData.AutoMessages[i];
          if (
            (null == persistentCustomBotId &&
              1 == autoMessage.IsPersistentCustomBot &&
              ((persistentCustomBotId = autoMessage.Id),
              Formilla.FormillaTriggerProactiveChatMessage(
                JSONData,
                autoMessage,
                !1
              )),
            Formilla.IsAutoMessageProactive(autoMessage))
          )
            if (Formilla.hasAutoMessageDisplayed(autoMessage))
              ("yes" !=
                Formilla.cookieService.getCookieValue(
                  "formillaIsChatWindowOpen"
                ) &&
                !Formilla.liveChatWidgetInstance.hasSnippetFeature()) ||
                "yes" ==
                  Formilla.cookieService.getCookieValue(
                    "formillaRequestChat"
                  ) ||
                (Formilla.FormillaTriggerProactiveChatMessage(
                  JSONData,
                  autoMessage,
                  !0
                ),
                "true" ==
                  Formilla.cookieService.getCookieValue("AutoMessageClicked") &&
                  (Formilla.autoMessageClicked = !0));
            else {
              var timer = autoMessage.TimeOnPageInSeconds;
              Formilla.pollTimer && window.clearInterval(Formilla.pollTimer),
                autoMessage.Id != persistentCustomBotId &&
                  autoMessage.IsPersistentCustomBot &&
                  (autoMessage.IsPersistentCustomBot = !1),
                (Formilla.proactiveTimer = window.setTimeout(function () {
                  Formilla.LaunchFormillaAutoChat(JSONData, autoMessage);
                }, 1e3 * timer));
            }
        }
    },
    hasAutoMessageDisplayed: function (autoMessage) {
      var lastAutoMessageIdDisplayed = Formilla.cookieService.getCookieValue(
        "formillaLastAutoMessageIdDisplayed"
      );
      if (null == lastAutoMessageIdDisplayed) return !1;
      var autoMessagesDisplayed = Formilla.cookieService.getCookieValue(
        "formillaAutoMessageList"
      );
      null != autoMessagesDisplayed &&
        (autoMessagesDisplayed = autoMessagesDisplayed.split(","));
      var autoMessagesOneTimeDisplayed = Formilla.cookieService.getCookieValue(
        "formillaAutoMessageOneTimeList"
      );
      return (
        null != autoMessagesOneTimeDisplayed &&
          (autoMessagesOneTimeDisplayed =
            autoMessagesOneTimeDisplayed.split(",")),
        (null != lastAutoMessageIdDisplayed &&
          lastAutoMessageIdDisplayed == autoMessage.Id) ||
          (0 == autoMessage.HowOftenIsDisplay &&
            null != autoMessagesDisplayed &&
            0 <= autoMessagesDisplayed.indexOf(autoMessage.Id.toString())) ||
          (1 == autoMessage.HowOftenIsDisplay &&
            null != autoMessagesOneTimeDisplayed &&
            0 <=
              autoMessagesOneTimeDisplayed.indexOf(autoMessage.Id.toString()))
      );
    },
    LaunchFormillaAutoChat: function (JSONData, autoMessage) {
      "none" == document.getElementById("divFormillaChat").style.display &&
        Formilla.FormillaTriggerProactiveChatMessage(JSONData, autoMessage, !0);
    },
    getFormillaCookie: function (c_name) {
      var i,
        x,
        y,
        ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++)
        if (
          ((x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="))),
          (y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1)),
          (x = x.replace(/^\s+|\s+$/g, "")) == c_name)
        )
          return unescape(y);
    },
    getFormillaWindowHeight: function () {
      var windowHeight = 0;
      return (
        "number" == typeof window.innerHeight
          ? (windowHeight = window.innerHeight)
          : document.documentElement && document.documentElement.clientHeight
          ? (windowHeight = document.documentElement.clientHeight)
          : document.body &&
            document.body.clientHeight &&
            (windowHeight = document.body.clientHeight),
        windowHeight
      );
    },
    initFormillaDragDrop: function (bUseCss) {
      (Formilla.contentElement = document.getElementById("divFormillaChat")),
        (Formilla.contentWidth = Formilla.contentElement.offsetWidth),
        (Formilla.contentHeight = Formilla.contentElement.offsetHeight),
        (Formilla.sctop = parseInt(document.documentElement.scrollTop)),
        (Formilla.scleft = parseInt(document.documentElement.scrollLeft)),
        (Formilla.winwidth = parseInt(document.documentElement.clientWidth)),
        (Formilla.winheight = parseInt(document.documentElement.clientHeight)),
        (Formilla._dragElement = document.getElementById("divFormillaChat"));
      Formilla.isMobile.any() && Formilla.positionFormillaForMobile("right");
    },
    positionFormillaForMobile: function (location) {
      "right" == location
        ? ((Formilla._dragElement.style.top = "auto"),
          (Formilla._dragElement.style.left = "auto"),
          (Formilla._dragElement.style.bottom = "0px"),
          (Formilla._dragElement.style.right = "0px"))
        : "left" == location &&
          ((Formilla._dragElement.style.top = "auto"),
          (Formilla._dragElement.style.left = "0px"),
          (Formilla._dragElement.style.bottom = "0px"),
          (Formilla._dragElement.style.right = "auto"));
    },
    FormillaChatOnMouseDown: function (e) {
      null == e && (e = window.event);
      var target = null != e.target ? e.target : e.srcElement;
      if (
        ((1 == e.button && null != window.event) || 0 == e.button) &&
        0 <= target.className.indexOf("formilla-drag")
      )
        return (
          (Formilla._startX = e.clientX),
          (Formilla._startY = e.clientY),
          (Formilla._dragElement = document.getElementById("divFormillaChat")),
          (target = Formilla._dragElement),
          (Formilla._offsetX = Formilla.ExtractNumber(target.style.left)),
          (Formilla._offsetY = Formilla.ExtractNumber(target.style.top)),
          (Formilla._oldZIndex = target.style.zIndex),
          (target.style.zIndex = 2147483647),
          (document.onmousemove = Formilla.FormillaChatOnMouseMove),
          document.body.focus(),
          (document.onselectstart = function () {
            return !1;
          }),
          !(target.ondragstart = function () {
            return !1;
          })
        );
    },
    FormillaChatOnMouseMove: function (e) {
      if (null == e) e = window.event;
      (Formilla._dragElement.style.left =
        Formilla._offsetX + e.clientX - Formilla._startX + "px"),
        (Formilla._dragElement.style.top =
          Formilla._offsetY + e.clientY - Formilla._startY + "px"),
        Formilla._offsetX + e.clientX - Formilla._startX <= 0
          ? (Formilla._dragElement.style.left = "0px")
          : Formilla._offsetX + e.clientX - Formilla._startX >=
              Formilla.winwidth - Formilla.contentWidth &&
            (Formilla._dragElement.style.left =
              Formilla.winwidth - Formilla.contentWidth + "px"),
        Formilla._offsetY + e.clientY - Formilla._startY <= 0
          ? (Formilla._dragElement.style.top = "0px")
          : Formilla._offsetY + e.clientY - Formilla._startY >=
              Formilla.winheight - Formilla.contentHeight &&
            (Formilla._dragElement.style.top =
              Formilla.winheight - Formilla.contentHeight + "px");
    },
    FormillaChatOnMouseUp: function (e) {
      null != Formilla._dragElement &&
        ((Formilla._dragElement.style.zIndex = Formilla._oldZIndex),
        (document.onmousemove = null),
        (document.onselectstart = null),
        (Formilla._dragElement.ondragstart = null),
        Formilla.isActionPolling &&
          (document.onmousemove = Formilla.FormillaChatUpdateLastAction),
        (Formilla._dragElement = null));
    },
    FormillaChatUpdateLastAction: function (e) {
      if (null == e) e = window.event;
      (Formilla._lastAction = new Date()),
        document.getElementById("hdnFormillaSessionId").value.length <= 0 &&
          !Formilla.pollForActionTimer &&
          Formilla.startFormillaPollForActionTimer();
    },
    FormillaStartChat: function () {
      clearTimeout(Formilla.startChatTimeout),
        (Formilla.startChatTimeout = setTimeout(function () {
          Formilla.FormillaStartChatInternal();
        }, 100));
    },
    FormillaStartChatInternal: function () {
      if (!Formilla.isProcessingMessage) {
        Formilla.startChat = 1;
        var message = "";
        if ("3" == Formilla.widgetVersion) {
          if (!Formilla.validatePrechatFields()) return;
          message = Formilla.GetPrechatMessage();
        } else if (
          0 == (message = Formilla.chatEmailTextbox.value.trim()).trim().length
        )
          return void (Formilla.spanChatEmailTextboxError.style.display =
            "block");
        Formilla.isEmailRequiredToChat
          ? Formilla.FormillaValidateChatEmailAddress(!0)
            ? ((Formilla.spanChatEmailTextboxError.style.display = "none"),
              (Formilla.startChatButton.style.display = "none"),
              Formilla.FormillaSendMessage(message, !0),
              Formilla.FormillaAdjustHeight(
                Formilla.defaultChatMessageCtrHeight
              ),
              "3" == Formilla.widgetVersion
                ? (Formilla.headerIcon.className =
                    "formilla-i-h-user formilla-drag")
                : "2" == Formilla.widgetVersion &&
                  Formilla.adjustIframeContainer(!0))
            : (Formilla.spanChatEmailTextboxError.style.display = "block")
          : ((Formilla.spanChatEmailTextboxError.style.display = "none"),
            (Formilla.startChatButton.style.display = "none"),
            Formilla.FormillaSendMessage(message, !0),
            Formilla.FormillaAdjustHeight(Formilla.defaultChatMessageCtrHeight),
            "3" == Formilla.widgetVersion
              ? (Formilla.headerIcon.className =
                  "formilla-i-h-user formilla-drag")
              : "2" == Formilla.widgetVersion &&
                Formilla.adjustIframeContainer(!0));
      }
    },
    clearPrechatFormValues: function () {
      for (
        var inputs = document
            .getElementById("formillaTextContainer")
            .getElementsByClassName("formillaPrechatInput"),
          i = 0;
        i < inputs.length;
        i++
      ) {
        inputs[i].value = "";
      }
      return {};
    },
    getPrechatFormValues: function () {
      var values = {};
      return (
        Formilla.liveChatWidgetInstance.hasPrechat() &&
          (values = Formilla.liveChatWidgetInstance.getPrechatFormValues()),
        values
      );
    },
    GetPrechatMessage: function () {
      for (
        var inputs = document
            .getElementById("formillaTextContainer")
            .getElementsByClassName("formillaPrechatInput"),
          i = 0;
        i < inputs.length;
        i++
      ) {
        var input = inputs[i];
        if (input.getAttribute("data-field-type") == PreChatFieldType.Message)
          return input.value;
      }
      return "";
    },
    handleOnEnterKey: function (self, e) {
      if ("Microsoft Internet Explorer" == navigator.appName) {
        if (13 == event.keyCode) return Formilla.HandleSendEvent(), !1;
      } else if (13 == e.keyCode) return Formilla.HandleSendEvent(), !1;
    },
    handleOnKeyUp: function (self, e) {
      Formilla.FormillaIsUserTyping();
    },
    handleOnChange: function (self, e) {
      Formilla.FormillaIsUserTyping();
    },
    handleOnClick: function (self, e) {
      Formilla.hasMobileCSS &&
        Formilla.isMobile.any() &&
        screen.width <= Formilla.maxResolutionForMobile &&
        setTimeout(function () {
          Formilla.FormillaAdjustHeight(
            Formilla.contentElement.scrollHeight -
              Formilla.mobileCSSSubtractFromHeight +
              "px"
          ),
            (Formilla.chatMessagesContainer.scrollTop =
              Formilla.chatMessagesContainer.scrollHeight);
        }, 500);
    },
    handleOnBlur: function (self, e) {
      Formilla.hasMobileCSS &&
        Formilla.isMobile.any() &&
        screen.width <= Formilla.maxResolutionForMobile &&
        setTimeout(function () {
          Formilla.FormillaAdjustHeight(
            Formilla.contentElement.scrollHeight -
              Formilla.mobileCSSSubtractFromHeight +
              "px"
          ),
            (Formilla.chatMessagesContainer.scrollTop =
              Formilla.chatMessagesContainer.scrollHeight);
        }, 500);
    },
    FormillaIsUserTyping: function () {
      0 < Formilla.chatTextbox.value.trim().length
        ? (Formilla.isUserTyping = !0)
        : (Formilla.isUserTyping = !1);
    },
    bindFormillaOnEnterKey: function () {
      (Formilla.chatTextbox.onkeydown = function (event) {
        return Formilla.handleOnEnterKey(this, event);
      }),
        (Formilla.chatTextbox.onkeyup = function (event) {
          return Formilla.handleOnKeyUp(this, event);
        }),
        (Formilla.chatTextbox.onchange = function (event) {
          return Formilla.handleOnChange(this, event);
        }),
        (Formilla.chatTextbox.onclick = function (event) {
          return Formilla.handleOnClick(this, event);
        }),
        (Formilla.chatTextbox.onblur = function (event) {
          return Formilla.handleOnBlur(this, event);
        });
    },
    handleOnEnterKeyChatEmail: function (self, e) {
      if ("Microsoft Internet Explorer" == navigator.appName) {
        if (13 == event.keyCode) return Formilla.FormillaStartChat(), !1;
      } else if (13 == e.keyCode) return Formilla.FormillaStartChat(), !1;
    },
    clearPrechatValidations: function () {
      Formilla.liveChatWidgetInstance.hasPrechat() &&
        Formilla.liveChatWidgetInstance.clearPrechatValidations();
    },
    setPrechatEmail: function (email) {
      for (
        var inputs = document
            .getElementById("formillaTextContainer")
            .getElementsByClassName("formillaPrechatInput"),
          i = 0;
        i < inputs.length;
        i++
      ) {
        var input = inputs[i];
        "Email" == input.getAttribute("data-field-type") &&
          (input.value = email);
      }
    },
    validatePrechatFields: function (message) {
      return (
        !Formilla.liveChatWidgetInstance.hasPrechat() ||
        Formilla.liveChatWidgetInstance.validatePrechatFields(message)
      );
    },
    validatePrechatField: function (input) {
      var result = !0,
        isRequired = input.getAttribute("data-required"),
        type = input.getAttribute("data-field-type"),
        value =
          ("select-one" == input.type && 0 < input.selectedIndex) ||
          "text" == input.type ||
          "textarea" == input.type
            ? input.value
            : "";
      return (
        0 == value.trim().length && "True" == isRequired
          ? (result = !1)
          : 0 < value.length &&
            type == PreChatFieldType.Email &&
            (result = Formilla.FormillaIsValidEmail(value)),
        result
      );
    },
    bindFormillaOnEnterKeyChatEmail: function () {
      Formilla.chatEmailTextbox.onkeydown = function (event) {
        return Formilla.handleOnEnterKeyChatEmail(this, event);
      };
    },
    bindFormillaEmailEvents: function () {
      Formilla.chatEmailTextbox.onkeypress,
        Formilla.chatEmailTextbox.onkeydown,
        (Formilla.chatEmailTextbox.onkeyup = function (e) {
          "" == Formilla.chatEmailTextbox.value.trim()
            ? ((Formilla.spanChatEmailTextbox.style.display = "block"),
              "3" == Formilla.widgetVersion &&
                (Formilla.chatEmailTextbox.parentElement.className =
                  "formillaError"))
            : ((Formilla.spanChatEmailTextbox.style.display = "none"),
              "3" == Formilla.widgetVersion &&
                (Formilla.chatEmailTextbox.parentElement.className =
                  "formillaFocus")),
            Formilla.isEmailRequiredToChat &&
              Formilla.FormillaValidateChatEmailAddress(!1);
        }),
        (Formilla.chatEmailTextbox.onblur = function (e) {
          if (
            (Formilla.isEmailRequiredToChat &&
              Formilla.FormillaValidateChatEmailAddress(!0),
            "" == Formilla.chatEmailTextbox.value.trim())
          )
            return (
              Formilla.spanChatEmailTextbox.style.display,
              "3" == Formilla.widgetVersion &&
                (Formilla.chatEmailTextbox.parentElement.className =
                  "formillaError"),
              !1
            );
        }),
        Formilla.bindOfflineFormFields();
    },
    bindOfflineFormFields: function () {
      Formilla.emailTextbox.onkeypress,
        Formilla.emailTextbox.onkeydown,
        (Formilla.emailTextbox.onkeyup = function (e) {
          "" == Formilla.emailTextbox.value.trim()
            ? (Formilla.spanEmailTextbox.style.display = "block")
            : (Formilla.spanEmailTextbox.style.display = "none"),
            Formilla.FormillaValidateEmailAddress(!1);
        }),
        Formilla.emailMessage.onkeypress,
        Formilla.emailMessage.onkeydown,
        (Formilla.emailMessage.onkeyup = function (e) {
          "" == Formilla.emailMessage.value.trim()
            ? (Formilla.spanEmailMessage.style.display = "block")
            : (Formilla.spanEmailMessage.style.display = "none"),
            Formilla.FormillaValidateEmailMessage(!1);
        }),
        (Formilla.emailTextbox.onblur = function (e) {
          if (
            (Formilla.FormillaValidateEmailAddress(!0),
            "" == Formilla.emailTextbox.value.trim())
          )
            return Formilla.spanEmailTextbox.style.display, !1;
        }),
        (Formilla.emailMessage.onblur = function (e) {
          if (
            (Formilla.FormillaValidateEmailMessage(!0),
            "" == Formilla.emailMessage.value.trim())
          )
            return Formilla.spanEmailMessage.style.display, !1;
        });
    },
    initFormillaChatFields: function () {
      (Formilla.startMessageContainer = document.getElementById(
        "divFormillaStartCtr"
      )),
        (Formilla.chatMessagesContainer = document.getElementById(
          "divFormillaChatMessages"
        )),
        (Formilla.agentIsTypingContainer = document.getElementById(
          "divFormillaAgentIsTypingCtr"
        )),
        (Formilla.agentIsTypingMessage = document.getElementById(
          "spanFormillaAgentIsTyping"
        )),
        (Formilla.agentIsTypingImage = document.getElementById(
          "formillaAgentIsTypingImage"
        )),
        (Formilla.lastChatMessageTimestamp = document.getElementById(
          "hdnLastChatMessageTimestamp"
        )),
        (Formilla.chatTextbox = document.getElementById("txtFormillaMessage")),
        (Formilla.spanChatEmailTextbox = document.getElementById(
          "spanFormillaChatEmailTextbox"
        )),
        (Formilla.spanChatEmailTextboxError = document.getElementById(
          "spanFormillaChatEmailTextboxError"
        )),
        Formilla.liveChatWidgetInstance.onInitFormillaChatFields(),
        (Formilla.popupFooterBottom = document.getElementById(
          "formillaPopupFooterBeforeChat"
        )),
        (Formilla.popupChatFooter = document.getElementById(
          "formillaPopupChatFooter"
        )),
        (Formilla.agentTypingBar = document.getElementById(
          "formillaAgentTypingBar"
        )),
        (Formilla.emailBoxContainer = document.getElementById(
          "divFormillaEmailBox"
        )),
        (Formilla.spanEmailTextbox = document.getElementById(
          "spanFormillaEmailTextbox"
        )),
        (Formilla.emailTextbox = document.getElementById(
          "txtFormillaEmailTextbox"
        )),
        (Formilla.spanEmailMessage = document.getElementById(
          "spanFormillaEmailMessage"
        )),
        (Formilla.emailMessage = document.getElementById(
          "txtFormillaEmailMessage"
        )),
        (Formilla.emailUsButton = document.getElementById(
          "formillaEmailButton"
        )),
        (Formilla.sendButton = document.getElementById("formillaSendButton")),
        (Formilla.startChatButton = document.getElementById(
          "formillaStartChatButton"
        )),
        (Formilla.responseBoxContainer = document.getElementById(
          "divFormillaResponseBox"
        )),
        (Formilla.spanFormillaResponseMessage = document.getElementById(
          "spanFormillaResponseMessage"
        )),
        (Formilla.headerIcon = document.getElementById("formillaHeaderIcon")),
        (Formilla.headerAgentPicture = document.getElementById(
          "formillaHeaderAgentPicture"
        )),
        (Formilla.formillaChatEmailTextboxIcon = document.getElementById(
          "formillaChatEmailTextboxIcon"
        ));
    },
    initFormillaChatShowChatWindow: function (isChatAlreadyVisible) {
      null == isChatAlreadyVisible
        ? (document.getElementById("divFormillaChat").style.visibility =
            "visible")
        : 0 == isChatAlreadyVisible &&
          ((document.getElementById("divFormillaChat").style.visibility =
            "hidden"),
          (document.getElementById("divFormillaChat").style.overflow =
            "hidden")),
        (document.getElementById("divFormillaChat").style.display = ""),
        Formilla.initFormillaDragDrop(!0),
        Formilla.bindFormillaOnEnterKey(),
        Formilla.liveChatWidgetInstance.bindEventsOnInitFormillaChatShowChatWindow(),
        Formilla.liveChatWidgetInstance.bindEventsOnInitCollectInputs(),
        Formilla.isMobile.any() ||
          Formilla.isMobile.ipad() ||
          Formilla.chatTextbox.focus(),
        Formilla.cookieService.getCookieValue("formillaChatSession") &&
          (Formilla.pollTimer || Formilla.startFormillaPollTimer()),
        (Formilla.chatMessagesContainer.scrollTop =
          Formilla.chatMessagesContainer.scrollHeight),
        "3" == Formilla.widgetVersion &&
        Formilla.isMobile.any() &&
        screen.width <= Formilla.maxResolutionForMobile
          ? ((document.getElementById("divFormillaChat").className =
              "formilladg formilla-drag chatWidgetMobileShow"),
            setTimeout(function () {
              Formilla.AddMobileOverlayStyle();
            }, 300))
          : Formilla.AddMobileOverlayStyle(),
        "yes" == Formilla.cookieService.getCookieValue("formillaIsMinimized")
          ? (document.getElementById("divFormillaChat").style.display = "none")
          : isChatAlreadyVisible ||
            Formilla.liveChatWidgetInstance.showWidgetAnimation();
    },
    validateCollectInputs: function (inputs) {
      return Formilla.liveChatWidgetInstance.validateCollectInputs(inputs);
    },
    validateCollectInput: function (input) {
      var result = !0,
        isRequired = input.getAttribute("data-required"),
        type = input.getAttribute("data-field-type"),
        value =
          ("select-one" == input.type && 0 < input.selectedIndex) ||
          "text" == input.type ||
          "textarea" == input.type
            ? input.value
            : "";
      return (
        0 == value.trim().length && "True" == isRequired
          ? (result = !1)
          : 0 < value.length &&
            type == CollectInputFieldType.Email &&
            (result = Formilla.FormillaIsValidEmail(value)),
        result
      );
    },
    GetCollectedInputValues: function (inputs) {
      if (null == inputs || null == inputs) return null;
      for (var result = [], contactData = {}, i = 0; i < inputs.length; i++)
        if (
          !inputs[i].hasAttribute("disabled") &&
          !inputs[i].hasAttribute("readonly")
        ) {
          inputs[i].setAttribute("disabled", ""),
            inputs[i].setAttribute("readonly", "");
          var collectInput = {
            ActionId: parseInt(inputs[i].getAttribute("data-action-id")),
            ActionType: parseInt(inputs[i].getAttribute("data-action-type")),
            FieldType: parseInt(inputs[i].getAttribute("data-field-type")),
            Value: inputs[i].value,
          };
          (contactData[collectInput.FieldType] = collectInput.Value),
            result.push(collectInput);
        }
      for (var property in (0 == result.length && (result = null),
      null == Formilla.contactData &&
        (Formilla.contactData = {
          IsContact: !1,
          FirstName: null,
          LastName: null,
          Email: null,
          Phone: null,
          CustomField1: null,
          CustomField2: null,
          CustomField3: null,
        }),
      contactData))
        if (contactData.hasOwnProperty(property))
          switch (parseInt(property)) {
            case CollectInputFieldType.FirstName:
              Formilla.contactData.FirstName = contactData[property];
              break;
            case CollectInputFieldType.LastName:
              Formilla.contactData.LastName = contactData[property];
              break;
            case CollectInputFieldType.Email:
              Formilla.contactData.Email = contactData[property];
              break;
            case CollectInputFieldType.Phone:
              Formilla.contactData.Phone = contactData[property];
          }
      return result;
    },
    AddMobileOverlayStyle: function () {
      if (
        Formilla.liveChatWidgetInstance.hasMobileStyles() &&
        "yes" != Formilla.cookieService.getCookieValue("formillaIsMinimized")
      ) {
        var head = window.parent.document.getElementsByTagName("head").item(0);
        if (
          null ==
          window.parent.document.getElementById("formilla-mobile-overlay")
        ) {
          var style = window.parent.document.createElement("style");
          (style.type = "text/css"),
            style.setAttribute("id", "formilla-mobile-overlay");
          var mobileCss =
            "@media (max-width: " +
            Formilla.maxResolutionForMobile +
            "px) { body { -webkit-overflow-scrolling: auto !important; } body > * { display: none !important; } #formilla-frame { display: block !important; } }";
          style.styleSheet
            ? (style.styleSheet.cssText = mobileCss)
            : style.appendChild(
                window.parent.document.createTextNode(mobileCss)
              ),
            head.appendChild(style);
        }
      } else
        Formilla.isMobile.ipad() ||
          setTimeout(function () {
            Formilla.chatEmailTextbox.focus();
          }, 70);
    },
    handleChatWidgetShownIOS: function () {
      if (Formilla.isMobile.ipad()) {
        var body = document.body;
        -1 == body.className.indexOf("formilla-disable-scroll") &&
          (body.className = body.className + " formilla-disable-scroll"),
          window.scrollTo(0, document.body.scrollHeight);
      }
    },
    handleChatWidgetHideIOS: function () {
      if (Formilla.isMobile.ipad()) {
        var body = document.body;
        body.className = body.className.replace("formilla-disable-scroll", "");
      }
    },
    AutoInitFormillaChat: function () {
      var isChatAlreadyVisible =
        null != Formilla.contentElement &&
        null != Formilla.contentElement.style &&
        "none" != Formilla.contentElement.style.display;
      Formilla.FormillaResizeIframeContainer(!0, Formilla.isAttnGrabberVisible),
        Formilla.initFormillaChatFields(),
        Formilla.initFormillaChatShowChatWindow(isChatAlreadyVisible),
        Formilla.isChatWidgetVisible() &&
          Formilla.getParentFormillaObject().handleChatWidgetShownIOS(),
        Formilla.liveChatWidgetInstance.onPreAutoInitFormillaChat(
          isChatAlreadyVisible
        ),
        Formilla.adjustIframeContainer(isChatAlreadyVisible);
      var adjustScrollTimeout = Formilla.liveChatWidgetInstance.hasAnimations()
        ? Formilla.liveChatWidgetInstance.widgetShowAnimationDelay / 2
        : 100;
      setTimeout(function () {
        Formilla.liveChatWidgetInstance.adjustChatContainerScroll(
          !isChatAlreadyVisible
        );
      }, adjustScrollTimeout),
        Formilla.clearPrechatValidations(),
        Formilla.liveChatWidgetInstance.onAutoInitFormillaChat(),
        Formilla.hasMobileCSS &&
          screen.width <= Formilla.maxResolutionForMobile &&
          setTimeout(function () {
            Formilla.FormillaAdjustHeight(
              Formilla.contentElement.scrollHeight -
                Formilla.mobileCSSSubtractFromHeight +
                "px"
            ),
              (Formilla.chatMessagesContainer.scrollTop =
                Formilla.chatMessagesContainer.scrollHeight);
          }, 500),
        !Formilla.isEditor &&
          Formilla.contentElement &&
          (Formilla.contentElement.style.bottom = "0px");
    },
    showLiveChatBtn: function (showAnimation) {
      Formilla.liveChatWidgetInstance.onShowLiveChatBtn(),
        Formilla.getParentFormillaObject().handleChatWidgetHideIOS(),
        showAnimation &&
          Formilla.liveChatWidgetInstance.hasAnimations() &&
          setTimeout(function () {
            Formilla.liveChatWidgetInstance.showChatButtonAnimation();
          }, 300);
    },
    hideLiveChatBtn: function () {
      Formilla.liveChatWidgetInstance.onHideLiveChatBtn();
    },
    initFormillaChatFromParent: function () {
      document
        .getElementById("formilla-frame")
        .contentWindow.Formilla.initFormillaChat();
    },
    initFormillaChat: function (hasNotUserClickChatBtn) {
      null != document.getElementById("formilla-frame")
        ? Formilla.initFormillaChatFromParent()
        : (Formilla.cookieService.deleteCookie("formillaIsMinimized"),
          Formilla.hideLiveChatBtn(),
          Formilla.isChatShown
            ? Formilla.hideAttnGrabberWithoutExpiration()
            : Formilla.hideOfflineAttnGrabberWithoutExpiration(),
          Formilla.AutoInitFormillaChat(),
          Formilla.FormillaRealignWidget(),
          null == Formilla.googleAnalyticService ||
            hasNotUserClickChatBtn ||
            (Formilla.isChatShown
              ? Formilla.googleAnalyticService.userClickChatButton()
              : Formilla.googleAnalyticService.userClickOfflineBtn()),
          setTimeout(function () {
            Formilla.liveChatWidgetInstance.onWindowResize();
          }, 200),
          Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
            (Formilla.liveChatWidgetInstance.resetSnippetCounter(),
            Formilla.isMobile.any() &&
              !hasNotUserClickChatBtn &&
              Formilla.liveChatWidgetInstance.updateLastVisitorViewedTimestamp()));
    },
    initProactiveFormillaChat: function (hideWidget) {
      Formilla.FormillaResizeIframeContainer(!0, Formilla.isAttnGrabberVisible),
        Formilla.adjustIframeContainer(),
        hideWidget ||
          Formilla.getParentFormillaObject().handleChatWidgetShownIOS(),
        Formilla.initFormillaChatFields(),
        hideWidget || Formilla.initFormillaChatShowChatWindow(),
        "3" != Formilla.widgetVersion
          ? (Formilla.chatEmailTextbox.style.display = "none")
          : Formilla.FormillaHideElement(Formilla.chatEmailTextboxContainer),
        Formilla.liveChatWidgetInstance.onInitProactiveFormillaChat(),
        Formilla.FormillaHideElement(Formilla.startMessageContainer),
        Formilla.FormillaHideElement(Formilla.chatEmailTextboxContainer),
        Formilla.FormillaHideElement(Formilla.popupFooterBottom),
        Formilla.FormillaShowElement(Formilla.chatMessagesContainer),
        Formilla.FormillaShowElement(Formilla.popupChatFooter),
        Formilla.FormillaShowElement(Formilla.agentTypingBar),
        (Formilla.spanChatEmailTextbox.style.display = "none"),
        Formilla.spanChatEmailTextboxError &&
          (Formilla.spanChatEmailTextboxError.style.display = "none"),
        (Formilla.startChatButton.style.display = "none"),
        (Formilla.chatTextbox.style.display = ""),
        Formilla.liveChatWidgetInstance.enableChatInput(),
        Formilla.isMobile.ipad() || Formilla.chatTextbox.focus(),
        Formilla.contentElement &&
          (Formilla.contentElement.style.bottom = "0px");
    },
    startFormillaPollTimer: function () {
      Formilla.proactiveTimer && window.clearTimeout(Formilla.proactiveTimer),
        (Formilla.pollTimer = window.setInterval(
          Formilla.GetNewFormillaMessages,
          3e3
        ));
    },
    startFormillaPollForActionTimer: function () {
      Formilla.pollForActionTimer = window.setInterval(
        Formilla.FormillaPollForAction,
        5e3
      );
    },
    FormillaPollForAction: function () {
      var currentTime = new Date();
      Math.round((currentTime - Formilla._lastAction) / 1e3) <= 60 &&
      document.getElementById("hdnFormillaSessionId").value.length <= 0
        ? new FormillaPublicWebApiService().pollForAction(
            function (data) {
              data && Formilla.processFormillaAction(data);
            },
            function () {
              console.log("poll for action failed");
            }
          )
        : Formilla.pollForActionTimer &&
          (window.clearInterval(Formilla.pollForActionTimer),
          (Formilla.pollForActionTimer = ""));
    },
    processFormillaAction: function (JSONData) {
      null != JSONData &&
        (Formilla.FormillaWriteVisitorCookieValue(JSONData.VisitorGuid),
        "no" ==
          Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen") &&
          Formilla.cookieService.deleteCookie("formillaIsChatWindowOpen"),
        document.getElementById("hdnFormillaSessionId").value.length <= 0 &&
          "True" == JSONData.HasAgentRequestedChat &&
          (Formilla.FormillaProcessAgentRequestedChat(JSONData),
          null != Formilla.googleAnalyticService &&
            Formilla.googleAnalyticService.agentRequestChat(
              JSONData.AgentName
            )));
    },
    FormillaProcessAgentRequestedChat: function (JSONData, isRefreshPage) {
      Formilla.proactiveTimer && window.clearTimeout(Formilla.proactiveTimer),
        (Formilla.isProactive = !0);
      var hideWidget = !(Formilla.isRequestChat = !0);
      if (!Formilla.isDirectLinkMode) {
        "3" == Formilla.widgetVersion &&
          Formilla.isMobile.any() &&
          screen.width <= Formilla.maxResolutionForMobile &&
          (Formilla.FormillaLoadProactiveMobilePopup(JSONData),
          (hideWidget = !0)),
          Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
            !Formilla.isDirectLinkMode &&
            !Formilla.isChatWidgetVisible() &&
            ((isRefreshPage &&
              Formilla.liveChatWidgetInstance.getSnippetState()) ||
              !isRefreshPage) &&
            (Formilla.liveChatWidgetInstance.showSnippet(
              JSONData.RequestChatMessageText,
              JSONData.AgentPic,
              null,
              !1,
              !0
            ),
            (hideWidget = !0)),
          Formilla.initProactiveFormillaChat(hideWidget),
          Formilla.liveChatWidgetInstance.onFormillaRenderAgentPic(JSONData),
          Formilla.liveChatWidgetInstance.removeChatBotInfoFromSendChatMessage(),
          Formilla.liveChatWidgetInstance.hideSendChatMessageContainer(!1);
        var playNewMessageNotification =
          null == Formilla.cookieService.getCookieValue("formillaRequestChat");
        Formilla.FormillaShowMessageToUser(
          JSONData.RequestChatMessage,
          !0,
          playNewMessageNotification
        ),
          hideWidget ||
            Formilla.FormillaAdjustHeight(Formilla.defaultChatMessageCtrHeight),
          Formilla.cookieService.addSessionCookie(
            "formillaIsChatWindowOpen",
            "yes"
          ),
          Formilla.cookieService.addSessionCookie("formillaRequestChat", "yes"),
          Formilla.convertFormillaChatMessageTime(),
          Formilla.hideLiveChatBtn(),
          Formilla.hideAttnGrabberWithoutExpiration(),
          Formilla.liveChatWidgetInstance.hasMessageAgentPictureFeature() &&
            Formilla.liveChatWidgetInstance.setLastAgentImgVisibility();
      }
    },
    FormillaUpdateVisitorInfo: function () {
      Formilla.proactiveTimer && window.clearTimeout(Formilla.proactiveTimer),
        (Formilla.cookieService = new FormillaLiveChatCookieService());
      var chatSessionGuid = document.getElementById(
          "hdnFormillaSessionId"
        ).value,
        visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
        bIsReturning = !1,
        customerEmail = Formilla.customerEmail
          ? encodeURIComponent(Formilla.customerEmail)
          : "",
        customerFirstName = Formilla.customerFirstName
          ? encodeURIComponent(Formilla.customerFirstName)
          : "",
        customerLastName = Formilla.customerLastName
          ? encodeURIComponent(Formilla.customerLastName)
          : "",
        customerPhone = Formilla.customerPhone
          ? encodeURIComponent(Formilla.customerPhone)
          : "",
        customField1 = Formilla.customField1
          ? encodeURIComponent(Formilla.customField1)
          : "",
        customField2 = Formilla.customField2
          ? encodeURIComponent(Formilla.customField2)
          : "",
        customField3 = Formilla.customField3
          ? encodeURIComponent(Formilla.customField3)
          : "",
        browserLanguage = navigator.languages
          ? navigator.languages[0]
          : navigator.language || navigator.userLanguage,
        lastAutoMessageIdDisplayed = Formilla.cookieService.getCookieValue(
          "formillaLastAutoMessageIdDisplayed"
        );
      lastAutoMessageIdDisplayed || (lastAutoMessageIdDisplayed = "");
      var autoMessagesDisplayed = Formilla.cookieService.getCookieValue(
        "formillaAutoMessageList"
      );
      autoMessagesDisplayed || (autoMessagesDisplayed = "");
      var autoMessagesOneTimeDisplayed = Formilla.cookieService.getCookieValue(
        "formillaAutoMessageOneTimeList"
      );
      autoMessagesOneTimeDisplayed || (autoMessagesOneTimeDisplayed = ""),
        null != visitorGuid && 0 < visitorGuid.length
          ? (bIsReturning = !0)
          : (visitorGuid = "");
      var url =
        Formilla.formillaProtocol() +
        Formilla.formillaDomain +
        "/ajaxhandler.aspx?rnd=" +
        Math.random();
      url =
        url +
        "&f=updateVisitorInfo&Guid=" +
        Formilla.guid +
        "&ChatSessionGuid=" +
        chatSessionGuid +
        "&VisitorGuid=" +
        visitorGuid +
        "&UserEmail=" +
        customerEmail +
        "&customerFirstName=" +
        customerFirstName +
        "&customerLastName=" +
        customerLastName +
        "&customerPhone=" +
        customerPhone +
        "&screenWidth=" +
        screen.width +
        "&screenHeight=" +
        screen.height +
        "&CustomField1=" +
        customField1 +
        "&CustomField2=" +
        customField2 +
        "&CustomField3=" +
        customField3 +
        "&IsReturning=" +
        bIsReturning +
        "&IsChatWindowVisible=" +
        Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen") +
        "&pageURL=" +
        encodeURIComponent(Formilla.FormillaGetCurrentPageUrl()) +
        "&BrowserLanguage=" +
        browserLanguage +
        "&LastAutoMessageIdDisplayed=" +
        lastAutoMessageIdDisplayed +
        "&AutoMessagesDisplayed=" +
        autoMessagesDisplayed +
        "&AutoMessagesOneTimeDisplayed=" +
        autoMessagesOneTimeDisplayed +
        "&callback=Formilla.FormillaUpdateVisitorInfoCallback";
      var referrer = encodeURIComponent(document.referrer);
      600 < referrer.length && (referrer = referrer.substr(0, 600)),
        (url = url + "&referrer=" + referrer),
        Formilla.dynamicJSONTag(url);
    },
    FormillaUpdateVisitorInfoCallback: function (JSONData) {
      null != JSONData &&
        null != document.getElementById("hdnFormillaSessionId") &&
        document.getElementById("hdnFormillaSessionId").value.length <= 0 &&
        null != JSONData.AutoMessages &&
        Formilla.AutoPopUpFormillaChat(JSONData);
    },
    startFormillaAutoResponderTimer: function (seconds) {
      var iTimeElapsed = 0,
        iAddSeconds = 0;
      if (Formilla.cookieService.getCookieValue("formillaChatSession")) {
        if (
          (Formilla.autoResponderTimer
            ? (iAddSeconds = 5)
            : (Formilla.autoResponderTimer = window.setInterval(
                "Formilla.startFormillaAutoResponderTimer(" + seconds + ");",
                5e3
              )),
          Formilla.cookieService.getCookieValue("formillaAutoResponderTimer") &&
            (iTimeElapsed =
              parseInt(
                Formilla.cookieService.getCookieValue(
                  "formillaAutoResponderTimer"
                )
              ) + iAddSeconds),
          Formilla.cookieService.addSessionCookie(
            "formillaAutoResponderTimer",
            iTimeElapsed
          ),
          seconds - iTimeElapsed <= 5)
        ) {
          var iTriggerTime = seconds - iTimeElapsed;
          iTriggerTime < 0 && (iTriggerTime = 0),
            window.clearInterval(Formilla.autoResponderTimer),
            (Formilla.autoResponderTimer = null),
            Formilla.cookieService.deleteCookie("formillaAutoResponderTimer"),
            setTimeout(function () {
              Formilla.FormillaTriggerAutoResponder();
            }, 1e3 * iTriggerTime);
        }
      } else
        Formilla.autoResponderTimer &&
          (window.clearInterval(Formilla.autoResponderTimer),
          (Formilla.autoResponderTimer = null));
    },
    FormillaTriggerProactiveChatMessage: function (
      JSONData,
      autoMessage,
      showProactively
    ) {
      (Formilla.isProactive =
        Formilla.IsAutoMessageProactive(autoMessage) && showProactively),
        (Formilla.isCustomBotDisplayed =
          !Formilla.IsChatSmartMessage(autoMessage));
      var playNewMessageNotification =
          Formilla.cookieService.getCookieValue(
            "formillaLastAutoMessageIdDisplayed"
          ) != autoMessage.Id && Formilla.isProactive,
        snippetFired = !1,
        hideWidget = !1,
        postSmartMessageViewEvent =
          Formilla.isProactive &&
          null ==
            Formilla.cookieService.getCookieValue(
              "formillaLastAutoMessageIdDisplayed"
            );
      if (
        ("3" == Formilla.widgetVersion &&
          Formilla.isMobile.any() &&
          screen.width <= Formilla.maxResolutionForMobile &&
          (Formilla.FormillaLoadProactiveMobilePopup(JSONData, autoMessage),
          (hideWidget = !0)),
        "yes" ==
          Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen") ||
          !Formilla.liveChatWidgetInstance.hasSnippetFeature() ||
          Formilla.isDirectLinkMode ||
          Formilla.isChatWidgetVisible() ||
          (Formilla.isProactive &&
            Formilla.liveChatWidgetInstance.showSnippet(
              autoMessage.MobileMessage,
              autoMessage.DisplayImage,
              null,
              !0
            ),
          (snippetFired = hideWidget = !0)),
        (autoMessage.IsPersistentCustomBot && !showProactively) ||
          !autoMessage.IsPersistentCustomBot)
      ) {
        Formilla.initProactiveFormillaChat(hideWidget);
        var agentInfo = {
          AgentName: autoMessage.DisplayName,
          AgentPic: autoMessage.DisplayImage,
          AgentJobTitle: autoMessage.DisplayJobTitle,
          AgentBio: autoMessage.DisplayBio,
        };
        Formilla.liveChatWidgetInstance.onFormillaRenderAgentPic(agentInfo),
          Formilla.ShowAutoMessageToUser(autoMessage),
          Formilla.liveChatWidgetInstance.bindEventsOnInitCollectInputs();
      }
      (playNewMessageNotification &&
        Formilla.FormillaPlayNewMessageNotification(),
      Formilla.isProactive && Formilla.UpdateAutoMessageDisplayed(autoMessage),
      Formilla.IsChatSmartMessage(autoMessage) &&
        Formilla.liveChatWidgetInstance.renderPreChatFieldsForSmartMessage(),
      hideWidget ||
        Formilla.FormillaAdjustHeight(Formilla.defaultChatMessageCtrHeight),
      Formilla.convertFormillaChatMessageTime(),
      snippetFired ||
        Formilla.cookieService.addSessionCookie(
          "formillaIsChatWindowOpen",
          "yes"
        ),
      postSmartMessageViewEvent) &&
        (null != Formilla.googleAnalyticService &&
          Formilla.googleAnalyticService.smartMessageFired(
            Formilla.autoMessageTitle
          ),
        new FormillaPublicWebApiService().autoMessageEvent(
          Formilla.autoDisplayMessageId,
          FormillaEventType.AutoMessageView,
          function (data) {
            data &&
              data.VisitorGuid &&
              Formilla.FormillaWriteVisitorCookieValue(data.VisitorGuid);
          },
          function () {
            console.log("Error sending smart message view event");
          }
        ));
      Formilla.isProactive && Formilla.hideLiveChatBtn(),
        Formilla.hideAttnGrabberWithoutExpiration(),
        Formilla.adjustIframeContainer(),
        Formilla.liveChatWidgetInstance.hasMessageAgentPictureFeature() &&
          Formilla.liveChatWidgetInstance.setLastAgentImgVisibility();
    },
    FormillaLoadProactiveMobilePopup: function (data, autoMessage) {
      var popupContainer = document.getElementById(
          "formillaProactiveMobilePopup"
        ),
        message = "";
      (message = data.HasAgentRequestedChat
        ? data.RequestChatMessageText
        : autoMessage.MobileMessage),
        (message = Formilla.FormillaLinkify(message)),
        (document.getElementById("fpmMsg").innerHTML = message),
        Formilla.FormillaLoadProactiveMobilePopupAgentPic(data);
      var acceptBtn = document.getElementById("fpmABtn"),
        declineBtn = document.getElementById("fpmDBtn"),
        closeBtn = document.getElementById(
          "formillaProactiveMobilePopupHeaderCloseLink"
        );
      acceptBtn.addEventListener("click", function (event) {
        Formilla.FormillaHideElement(popupContainer),
          Formilla.initFormillaChatShowChatWindow(),
          Formilla.FormillaShowElement(Formilla.chatButton),
          Formilla.DeleteAutoMessageCookie(),
          Formilla.adjustIframeContainer();
      }),
        declineBtn.addEventListener("click", function (event) {
          (popupContainer.className =
            "formillaProactiveMobilePopup formillaProactiveMobilePopupClose formilladg"),
            setTimeout(function () {
              Formilla.FormillaHideElement(popupContainer),
                Formilla.FormillaShowElement(Formilla.chatButton),
                Formilla.hideFormillaChatWindow("divFormillaChat", "");
            }, 1e3);
        }),
        closeBtn.addEventListener("click", function (event) {
          (popupContainer.className =
            "formillaProactiveMobilePopup formillaProactiveMobilePopupClose formilladg"),
            setTimeout(function () {
              Formilla.FormillaHideElement(popupContainer),
                Formilla.FormillaShowElement(Formilla.chatButton),
                Formilla.hideFormillaChatWindow("divFormillaChat", "");
            }, 1e3);
        }),
        (popupContainer.className =
          "formillaProactiveMobilePopup formillaProactiveMobilePopupShow formilladg"),
        Formilla.FormillaShowElement(popupContainer),
        Formilla.FormillaHideElement(Formilla.chatButton),
        Formilla.FormillaPlayNewMessageNotification(),
        Formilla.adjustIframeContainer();
    },
    FormillaLoadProactiveMobilePopupAgentPic: function (data) {
      if (data.AgentPic) {
        document.getElementById(
          "formillaProactiveMobilePopupHeaderIcon"
        ).style.display = "none";
        var src =
            Formilla.formillaProtocol() +
            Formilla.formillaDomain +
            data.AgentPic,
          agentPic = document.getElementById(
            "formillaProactiveMobilePopupHeaderAgentPic"
          );
        (agentPic.src = src),
          (agentPic.style.display = "inline-block"),
          (agentPic.style.height = "42px");
      } else
        document.getElementById(
          "formillaProactiveMobilePopupHeaderIcon"
        ).className = "formilla-i-h-user";
    },
    FormillaTriggerAutoResponder: function () {
      if (!Formilla.hasAgentResponded) {
        var hdnFormillaSessionId = document.getElementById(
          "hdnFormillaSessionId"
        ).value;
        if (0 < hdnFormillaSessionId.length) {
          var url =
            Formilla.formillaProtocol() +
            Formilla.formillaDomain +
            "/ajaxhandler.aspx?rnd=" +
            Math.random();
          (url =
            url +
            "&f=triggerAutoResponder&guid=" +
            Formilla.guid +
            "&hdnFormillaSessionId=" +
            hdnFormillaSessionId),
            Formilla.dynamicJSONTag(url);
        }
      }
    },
    IsAutoMessageProactive: function (autoMessage) {
      return (
        Formilla.IsChatSmartMessage(autoMessage) ||
        autoMessage.IsProactiveCustomBot
      );
    },
    IsChatSmartMessage: function (autoMessage) {
      return 0 == autoMessage.Type;
    },
    GetNewFormillaMessages: function () {
      var hdnFormillaSessionId = document.getElementById(
          "hdnFormillaSessionId"
        ).value,
        hdnLastChatMessageTimestamp = 0;
      document.getElementById("hdnLastChatMessageTimestamp") &&
        (hdnLastChatMessageTimestamp = document.getElementById(
          "hdnLastChatMessageTimestamp"
        ).value);
      var url =
        Formilla.formillaProtocol() +
        Formilla.formillaDomain +
        "/ajaxhandler.aspx?rnd=" +
        Math.random();
      (url =
        url +
        "&f=getFormillaChatMessages&visitorGuid=" +
        Formilla.FormillaGetVisitorCookieValue() +
        "&guid=" +
        Formilla.guid +
        "&hdnFormillaSessionId=" +
        hdnFormillaSessionId +
        "&hdnLastChatMessageTimestamp=" +
        hdnLastChatMessageTimestamp +
        "&isUserTyping=" +
        Formilla.isUserTyping +
        "&callback=FormillaGetMessagesCallback"),
        Formilla.dynamicJSONTag(url);
    },
    FormillaGetMessagesCallback: function (JSONData) {
      if ((Formilla.FormillaAdjustHeightForMobile(), null != JSONData)) {
        if (JSONData.error) {
          var newMessage = document.createElement("div");
          (newMessage.innerHTML = JSONData.message),
            Formilla.chatMessagesContainer.appendChild(newMessage.firstChild),
            (Formilla.chatMessagesContainer.scrollTop =
              Formilla.chatMessagesContainer.scrollHeight);
        } else {
          var chatSessionId = Formilla.cookieService.getCookieValue(
            "formillaChatSession"
          );
          chatSessionId &&
            "none" ==
              document.getElementById("divFormillaChat").style.display &&
            Formilla.cookieService.getCookieValue("formillaIsMinimized"),
            "True" == JSONData.DeleteChatCookie &&
              (Formilla.cookieService.deleteCookie("formillaChatSession"),
              (document.getElementById("hdnFormillaSessionId").value = ""),
              Formilla.liveChatWidgetInstance.onChatSessionEnded(chatSessionId),
              Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
                Formilla.liveChatWidgetInstance.deleteSnippetState(),
              Formilla.isDirectLinkMode && Formilla.hideCloseBtn(),
              "" == Formilla.chatEmailTextbox.value.trim()
                ? (Formilla.spanChatEmailTextbox.style.display = "block")
                : (Formilla.spanChatEmailTextbox.style.display = "none"),
              (Formilla.startChatButton.style.display = "block"),
              Formilla.FormillaShowMinimizeButton(!1),
              Formilla.pollTimer &&
                (window.clearInterval(Formilla.pollTimer),
                (Formilla.pollTimer = "")),
              Formilla.isIframe ||
                ((Formilla.contentHeight =
                  Formilla.contentElement.offsetHeight),
                Formilla.FormillaRealignWidget(),
                Formilla.FormillaAdjustHeightForMobile()),
              "3" == Formilla.widgetVersion &&
                (Formilla.headerIcon.className =
                  "formilla-i-h-message on formilla-drag")),
            null != Formilla.googleAnalyticService &&
              JSONData.HasAgentResponded &&
              !Formilla.hasAgentResponded &&
              Formilla.googleAnalyticService.conversationStarted(),
            JSONData.HasAgentResponded &&
              ((Formilla.hasAgentResponded = !0),
              Formilla.liveChatWidgetInstance.removeChatBotInfoFromSendChatMessage(),
              Formilla.liveChatWidgetInstance.hideSendChatMessageContainer(!1)),
            "" != JSONData.AgentName &&
              Formilla.liveChatWidgetInstance.onFormillaRenderAgentPic(
                JSONData
              ),
            0 <
              Formilla.chatMessagesContainer.innerHTML.indexOf(
                "divFormillaStartMessage"
              ) ||
            JSONData.IsUserWaiting ||
            JSONData.ChatSessionStarted
              ? (JSONData.IsUserWaiting || JSONData.ChatSessionStarted
                  ? Formilla.liveChatWidgetInstance.addStandardQueueMessages(
                      JSONData.ChatMessages,
                      JSONData.QueueNumber
                    )
                  : null != JSONData.LastChatMessageTimestamp &&
                    "undefined" != JSONData.LastChatMessageTimestamp &&
                    ((null != Formilla.lastChatMessageTimestamp.value &&
                      "undefined" != Formilla.lastChatMessageTimestamp.value) ||
                      (Formilla.lastChatMessageTimestamp.value = 0),
                    JSONData.LastChatMessageTimestamp >
                      Formilla.lastChatMessageTimestamp.value &&
                      ((Formilla.chatMessagesContainer.innerHTML =
                        Formilla.FormillaLinkify(JSONData.ChatMessages)),
                      Formilla.FormillaShowChatWidget())),
                JSONData.ChatSessionStarted &&
                  (Formilla.liveChatWidgetInstance.enableChatInput(),
                  null != JSONData.autoResponderTimer &&
                    0 < JSONData.autoResponderTimer &&
                    (Formilla.cookieService.deleteCookie(
                      "formillaAutoResponderTimer"
                    ),
                    Formilla.startFormillaAutoResponderTimer(
                      JSONData.autoResponderTimer
                    )),
                  Formilla.FormillaShowChatWidget()))
              : null != JSONData.LastChatMessageTimestamp &&
                "undefined" != JSONData.LastChatMessageTimestamp &&
                ((null != Formilla.lastChatMessageTimestamp.value &&
                  "undefined" != Formilla.lastChatMessageTimestamp.value) ||
                  (Formilla.lastChatMessageTimestamp.value = 0),
                JSONData.LastChatMessageTimestamp >
                  Formilla.lastChatMessageTimestamp.value &&
                  ("" != JSONData.ChatMessages &&
                    Formilla.liveChatWidgetInstance.removeActionButtons(),
                  Formilla.liveChatWidgetInstance.addNewAgentMessages(
                    JSONData.ChatMessages,
                    JSONData.CmId,
                    JSONData.IsAgentBot
                  ),
                  !Formilla.liveChatWidgetInstance.hasSnippetFeature() ||
                  Formilla.isDirectLinkMode ||
                  Formilla.isChatWidgetVisible()
                    ? (Formilla.FormillaShowChatWidget(),
                      Formilla.isMobile.any() &&
                        Formilla.isPageOrIframeOnFocus() &&
                        Formilla.liveChatWidgetInstance.updateLastVisitorViewedTimestamp())
                    : (Formilla.hideLiveChatBtn(),
                      Formilla.liveChatWidgetInstance.showSnippet(
                        JSONData.LastAgentMessage,
                        JSONData.AgentPic,
                        JSONData.UnreadMessagesCount,
                        !1,
                        !1,
                        JSONData.IsFileAttachment
                      ),
                      Formilla.adjustIframeContainer(),
                      Formilla.FormillaResizeIframeContainer(!1, !1)))),
            "" != JSONData.ChatMessages && (JSONData.IsAgentTyping = !1),
            JSONData.IsAgentTyping
              ? (Formilla.liveChatWidgetInstance.showAgentIsTyping(
                  JSONData.AgentName,
                  JSONData.AgentPic
                ),
                (Formilla.agentIsTypingContainer.style.display = "inline"),
                Formilla.FormillaShowElement(Formilla.agentIsTypingImage))
              : ((Formilla.agentIsTypingMessage.style.display = "none"),
                Formilla.FormillaHideElement(Formilla.agentIsTypingImage)),
            0 != JSONData.LastChatMessageTimestamp &&
              (Formilla.lastChatMessageTimestamp.value =
                JSONData.LastChatMessageTimestamp),
            "" != JSONData.ChatMessages &&
              ((Formilla.chatMessagesContainer.scrollTop =
                Formilla.chatMessagesContainer.scrollHeight),
              JSONData.IsUserWaiting ||
                Formilla.FormillaPlayNewMessageNotification());
          var lastAgentViewedTimestamp = parseInt(
            JSONData.LastAgentViewedTimestamp
          );
          Formilla.liveChatWidgetInstance.hasMessageStatusFeature() &&
            lastAgentViewedTimestamp > Formilla.lastAgentViewedTimestamp &&
            ((Formilla.lastAgentViewedTimestamp = lastAgentViewedTimestamp),
            Formilla.liveChatWidgetInstance.markLastMessageAsRead(
              Formilla.chatPopupMessageReadText,
              Formilla.lastAgentViewedTimestamp,
              JSONData.IsCustomBot
            )),
            null != JSONData.HideSendChatMessage &&
              Formilla.liveChatWidgetInstance.hideSendChatMessageContainer(
                JSONData.HideSendChatMessage
              );
        }
        Formilla.convertFormillaChatMessageTime();
      }
    },
    HandleFileUpload: function (event) {
      Formilla.chatTextbox.focus(), event.preventDefault();
    },
    HandleSendEvent: function () {
      var action = Formilla.liveChatWidgetInstance.getChatBotAction(
        Formilla.sendButton
      );
      if (null != action) {
        var inputs = Formilla.liveChatWidgetInstance.getCollectInputFields();
        null == inputs || 0 == inputs.length
          ? Formilla.FormillaSendMessage(Formilla.chatTextbox.value, !0, action)
          : Formilla.validateCollectInputs(inputs);
      } else
        Formilla.liveChatWidgetInstance.isChatInputDisabled() ||
          Formilla.FormillaSendMessage(Formilla.chatTextbox.value);
    },
    HandleSendClick: function (event) {
      Formilla.chatTextbox.focus(),
        event.preventDefault(),
        Formilla.HandleSendEvent();
    },
    HandleActionClick: function (event, obj) {
      if ((event.preventDefault(), null == obj.attributes.clicked)) {
        for (
          var elements = document.querySelectorAll(
              'div[data-id="' + obj.attributes["data-id"].value + '"]'
            ),
            i = 0;
          i < elements.length;
          i++
        )
          elements[i].setAttribute("clicked", "true");
        var action = Formilla.liveChatWidgetInstance.getChatBotAction(obj);
        Formilla.FormillaSendMessage(action.Message, !0, action, !0);
      }
    },
    HandleCollectInputsClick: function (event, obj) {
      event.preventDefault();
      var allInputs = Formilla.liveChatWidgetInstance.getCollectInputFields(!0);
      if (
        null == obj.attributes.clicked &&
        Formilla.validateCollectInputs(allInputs)
      ) {
        obj.setAttribute("clicked", "true");
        var inputs = Formilla.liveChatWidgetInstance.getCollectInputFields(),
          action = Formilla.liveChatWidgetInstance.getChatBotAction(obj);
        (action.CollectedInputValues =
          Formilla.GetCollectedInputValues(inputs)),
          Formilla.FormillaSendMessage("", !0, action, !0);
      }
    },
    FormillaSendMessage: function (
      message,
      arePreChatFieldsAlreadyValidated,
      action,
      skipChatTextboxValidation
    ) {
      var service = new FormillaPublicWebApiService();
      if (
        ((null != action && null != action) || (action = null),
        (null != skipChatTextboxValidation &&
          null != skipChatTextboxValidation) ||
          (skipChatTextboxValidation = !1),
        (Formilla.startChat =
          null == Formilla.cookieService.getCookieValue("formillaChatSession")
            ? 1
            : 0),
        !(
          1 != Formilla.startChat ||
          Formilla.isRestartChat ||
          arePreChatFieldsAlreadyValidated ||
          Formilla.validatePrechatFields(message)
        ))
      )
        return !1;
      if (
        !Formilla.liveChatWidgetInstance.hasPrechat() &&
        Formilla.isProactive &&
        !Formilla.liveChatWidgetInstance.validateMessageField(message)
      )
        return !1;
      if (
        1 == Formilla.startChat &&
        Formilla.isRestartChat &&
        !Formilla.liveChatWidgetInstance.validateMessageField(message)
      )
        return !1;
      if (
        (skipChatTextboxValidation || Formilla.chatTextbox.focus(),
        1 == Formilla.startChat &&
          !skipChatTextboxValidation &&
          !Formilla.liveChatWidgetInstance.startChatWithValidMessageField(
            message
          ))
      )
        return !1;
      if (
        1 != Formilla.startChat &&
        !skipChatTextboxValidation &&
        !Formilla.liveChatWidgetInstance.validateMessageField(message)
      )
        return !1;
      if (
        (1 == Formilla.startChat &&
          "" == message.trim() &&
          (message = message.trim()),
        Formilla.liveChatWidgetInstance.disableChatInput(),
        Formilla.isProactive)
      ) {
        var lastAutoMessageIdDisplayed = Formilla.cookieService.getCookieValue(
          "formillaLastAutoMessageIdDisplayed"
        );
        null != lastAutoMessageIdDisplayed &&
          service.autoMessageEvent(
            lastAutoMessageIdDisplayed,
            FormillaEventType.AutoMessageReply,
            function (data) {
              data &&
                data.VisitorGuid &&
                Formilla.FormillaWriteVisitorCookieValue(data.VisitorGuid);
            },
            function () {
              console.log("Error sending smart message reply event");
            }
          ),
          Formilla.DeleteAutoMessageCookie();
      }
      if (Formilla.isProcessingMessage) console.log("Message skipped");
      else {
        (Formilla.isProcessingMessage = !0),
          null != Formilla.googleAnalyticService &&
            (Formilla.isProactive
              ? Formilla.isRequestChat
                ? Formilla.googleAnalyticService.userRespondedToChatRequest()
                : Formilla.googleAnalyticService.userRespondedToSmartMessage(
                    Formilla.autoMessageTitle
                  )
              : 1 == Formilla.startChat &&
                Formilla.googleAnalyticService.userStartedChat());
        var visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
          bIsReturning = !1;
        null != visitorGuid && 0 < visitorGuid.length && (bIsReturning = !0),
          Formilla.cookieService.deleteCookie("formillaIsChatWindowOpen"),
          Formilla.FormillaShowMinimizeButton(!0);
        var hdnFormillaSessionId = document.getElementById(
            "hdnFormillaSessionId"
          ).value,
          customerFirstName = Formilla.customerFirstName,
          customerLastName = Formilla.customerLastName,
          customerEmail = Formilla.customerEmail,
          customerPhone = Formilla.customerPhone,
          customField1 = Formilla.customField1,
          customField2 = Formilla.customField2,
          customField3 = Formilla.customField3,
          department = "";
        if (Formilla.liveChatWidgetInstance.hasPrechat()) {
          var prechatValues = Formilla.getPrechatFormValues();
          null != prechatValues[PreChatFieldType.Email] &&
            (customerEmail = prechatValues[PreChatFieldType.Email].trim()),
            null != prechatValues[PreChatFieldType.FirstName] &&
              (customerFirstName =
                prechatValues[PreChatFieldType.FirstName].trim()),
            null != prechatValues[PreChatFieldType.Phone] &&
              (customerPhone = prechatValues[PreChatFieldType.Phone]),
            null != prechatValues[PreChatFieldType.LastName] &&
              (customerLastName =
                prechatValues[PreChatFieldType.LastName].trim()),
            null != prechatValues[PreChatFieldType.Department] &&
              (department = prechatValues[PreChatFieldType.Department]),
            null != prechatValues[PreChatFieldType.Custom1] &&
              (customField1 = prechatValues[PreChatFieldType.Custom1]),
            null != prechatValues[PreChatFieldType.Custom2] &&
              (customField2 = prechatValues[PreChatFieldType.Custom2]),
            null != prechatValues[PreChatFieldType.Custom3] &&
              (customField3 = prechatValues[PreChatFieldType.Custom3]),
            null != Formilla.googleAnalyticService &&
              1 == Formilla.startChat &&
              ((null != prechatValues[PreChatFieldType.Email] &&
                "" != prechatValues[PreChatFieldType.Email]) ||
                (null != prechatValues[PreChatFieldType.Phone] &&
                  "" != prechatValues[PreChatFieldType.Phone])) &&
              Formilla.googleAnalyticService.prechatConversion(
                prechatValues[PreChatFieldType.Email],
                prechatValues[PreChatFieldType.Phone]
              );
        } else
          Formilla.isEmailRequiredToChat &&
            !Formilla.isProactive &&
            1 == Formilla.startChat &&
            ((customerEmail = message),
            (message = ""),
            null != Formilla.googleAnalyticService &&
              Formilla.googleAnalyticService.prechatConversion(
                customerEmail,
                null
              ));
        var url =
          Formilla.formillaProtocol() +
          Formilla.formillaDomain +
          "/ajaxhandler.aspx?rnd=" +
          Math.random();
        (url =
          url +
          "&f=sendChatMessage&guid=" +
          Formilla.guid +
          "&hdnFormillaSessionId=" +
          hdnFormillaSessionId +
          "&VisitorGuid=" +
          visitorGuid +
          "&IsReturning=" +
          bIsReturning +
          "&txtFormillaMessage=" +
          encodeURIComponent(Formilla.HTMLEncode(message))),
          1 == Formilla.startChat &&
            customerEmail &&
            Formilla.SetFormillaContactDataEmail(customerEmail);
        var startChat = !1;
        (1 == Formilla.startChat || Formilla.isProactive) &&
          ((startChat = !0),
          (Formilla.startChat = 0),
          (Formilla.hasAgentResponded = !1),
          skipChatTextboxValidation || (Formilla.chatTextbox.value = message),
          Formilla.FormillaAdjustHeightForMobile());
        var isRestartChat = Formilla.isRestartChat;
        Formilla.isRestartChat && (Formilla.isRestartChat = !1);
        service = new FormillaPublicWebApiService();
        var uploadedFileAttachments = null;
        Formilla.liveChatWidgetInstance.hasFileAttachmentsFeature() &&
          (uploadedFileAttachments =
            Formilla.fileAttachmentControl.getUploadedFileAttachmentsToSend(
              Formilla.fileAttachmentControl.getActiveChatSessionId()
            )),
          service.sendChatMessage(
            startChat,
            Formilla.isProactive,
            Formilla.isRequestChat,
            hdnFormillaSessionId,
            message,
            uploadedFileAttachments,
            customerEmail,
            customerFirstName,
            customerLastName,
            customerPhone,
            customField1,
            customField2,
            customField3,
            isRestartChat,
            Formilla.autoDisplayMessageId,
            action,
            department,
            function (data) {
              data &&
                (Formilla.FormillaSendMessageCallback(data),
                (Formilla.isProcessingMessage = !1));
            },
            function (JSONData) {
              (Formilla.isProcessingMessage = !1),
                JSONData.maxLengthError
                  ? (Formilla.liveChatWidgetInstance.enableChatInput(),
                    Formilla.chatTextbox.focus())
                  : JSONData.error
                  ? (Formilla.FormillaHideElement(
                      Formilla.startMessageContainer
                    ),
                    Formilla.FormillaShowElement(
                      Formilla.chatMessagesContainer
                    ),
                    0 <
                    Formilla.chatMessagesContainer.innerHTML.indexOf(
                      "divFormillaStartMessage"
                    )
                      ? (Formilla.chatMessagesContainer.innerHTML =
                          Formilla.FormillaFirstMessagePaddingTop() +
                          Formilla.FormillaFormatChatMessage(
                            JSONData.message,
                            !1,
                            !1
                          ))
                      : Formilla.liveChatWidgetInstance.addNewMessage(
                          JSONData.message,
                          !1,
                          !0
                        ),
                    (Formilla.chatMessagesContainer.scrollTop =
                      Formilla.chatMessagesContainer.scrollHeight),
                    Formilla.emailUsButton &&
                      (Formilla.emailUsButton.style.display = ""),
                    (Formilla.chatTextbox.style.height = "45px"),
                    (Formilla.isChatShown = !1),
                    (Formilla.isActionPolling = !1),
                    (document.onmousemove = null),
                    Formilla.pollForActionTimer &&
                      (window.clearInterval(Formilla.pollForActionTimer),
                      (Formilla.pollForActionTimer = "")),
                    Formilla.FormillaAdjustHeight(""))
                  : console.log("Error sending message");
            }
          );
      }
    },
    FormillaSendSilentMessage: function (sessionId, message) {
      var url =
        Formilla.formillaProtocol() +
        Formilla.formillaDomain +
        "/ajaxhandler.aspx?rnd=" +
        Math.random();
      (url =
        url +
        "&f=sendSilentChatMessage&hdnFormillaSessionId=" +
        sessionId +
        "&message=" +
        escape(message)),
        Formilla.dynamicJSONTag(url);
    },
    FormillaSendMessageCallback: function (JSONData) {
      if (
        (Formilla.liveChatWidgetInstance.enableChatInput(),
        Formilla.chatTextbox.focus(),
        null != JSONData)
      ) {
        if (!JSONData.error) {
          Formilla.FormillaWriteVisitorCookieValue(JSONData.VisitorGuid),
            Formilla.cookieService.getCookieValue("formillaChatSession") ||
              Formilla.startFormillaPollTimer(),
            (document.getElementById("hdnFormillaSessionId").value =
              JSONData.sessionId),
            Formilla.cookieService.addSessionCookie(
              "formillaChatSession",
              JSONData.sessionId
            ),
            Formilla.liveChatWidgetInstance.onFormillaSendMessageCallback(
              JSONData
            ),
            (Formilla.chatTextbox.style.display = ""),
            Formilla.FormillaShowElement(Formilla.chatMessagesContainer),
            Formilla.FormillaShowElement(Formilla.popupChatFooter),
            Formilla.FormillaShowElement(Formilla.agentTypingBar),
            Formilla.emailUsButton &&
              (Formilla.emailUsButton.style.display = "none"),
            JSONData.IsStartChat && Formilla.adjustIframeContainer(!0);
          var bWasProactive = Formilla.isProactive;
          (Formilla.isProactive = !1),
            null != JSONData.autoResponderTimer &&
              0 < JSONData.autoResponderTimer &&
              (Formilla.cookieService.deleteCookie(
                "formillaAutoResponderTimer"
              ),
              Formilla.startFormillaAutoResponderTimer(
                JSONData.autoResponderTimer
              ));
          var hasFileAttachmentsSent = !1;
          if (JSONData.IsStatusDisplay)
            (Formilla.chatMessagesContainer.innerHTML =
              JSONData.message + "<br />"),
              Formilla.liveChatWidgetInstance.disableChatInput();
          else {
            var message = "",
              fileAttachments = [];
            if (Formilla.liveChatWidgetInstance.hasFileAttachmentsFeature()) {
              var sessionObject =
                Formilla.fileAttachmentControl.getChatSessionUnsentData(
                  JSONData.sessionId
                );
              null != sessionObject &&
                null != sessionObject &&
                null != sessionObject.LastFilesSent &&
                null != sessionObject.LastFilesSent &&
                (fileAttachments = sessionObject.LastFilesSent);
            }
            hasFileAttachmentsSent = 0 < fileAttachments.length;
            var messageSentDate = new Date(
              parseInt(JSONData.MessageDateUnixTimeStamp)
            );
            JSONData.IsStartChat
              ? (0 < JSONData.userStartMessageNoEmail.length &&
                  !bWasProactive &&
                  (Formilla.chatMessagesContainer.innerHTML =
                    Formilla.FormillaFirstMessagePaddingTop() +
                    Formilla.FormillaFormatChatMessage(
                      JSONData.userStartMessageNoEmail,
                      !0,
                      !1,
                      messageSentDate
                    )),
                (message = Formilla.FormillaLinkify(
                  Formilla.HTMLEncode(JSONData.userStartMessage)
                )),
                (bWasProactive || Formilla.isRequestChat) &&
                  Formilla.liveChatWidgetInstance.updateLastVisitorViewedTimestamp(
                    !0,
                    messageSentDate.getTime()
                  ))
              : (message = Formilla.FormillaLinkify(
                  Formilla.HTMLEncode(Formilla.chatTextbox.value)
                ));
            var hasChatBotResponded =
                null != JSONData.ChatMessages &&
                null != JSONData.ChatMessages &&
                "" != JSONData.ChatMessages,
              hasMessageStatusFeature =
                Formilla.liveChatWidgetInstance.hasMessageStatusFeature();
            hasMessageStatusFeature &&
              Formilla.liveChatWidgetInstance.removeLastSentStatusElement(),
              null != JSONData.MessageGuid &&
              null != JSONData.MessageGuid &&
              "" != JSONData.MessageGuid &&
              null != JSONData.ActionId &&
              null != JSONData.ActionId &&
              0 < JSONData.ActionId
                ? Formilla.FormillaFormatBotActionMessage(
                    message,
                    JSONData.ActionId,
                    JSONData.MessageGuid,
                    messageSentDate
                  )
                : ("" != message &&
                    Formilla.liveChatWidgetInstance.removeActionButtons(),
                  0 <
                  Formilla.chatMessagesContainer.innerHTML.indexOf(
                    "divFormillaStartMessage"
                  )
                    ? (Formilla.chatMessagesContainer.innerHTML =
                        Formilla.FormillaFirstMessagePaddingTop() +
                        Formilla.FormillaFormatChatMessage(
                          message,
                          !1,
                          !1,
                          messageSentDate
                        ))
                    : Formilla.liveChatWidgetInstance.addNewMessage(
                        message,
                        !1,
                        !0,
                        messageSentDate,
                        fileAttachments
                      )),
              hasMessageStatusFeature &&
                Formilla.liveChatWidgetInstance.markLastMessageAsSent(
                  Formilla.chatPopupMessageSentText,
                  hasChatBotResponded
                ),
              null != JSONData.ChatEnded &&
              null != JSONData.ChatEnded &&
              1 == JSONData.ChatEnded
                ? Formilla.liveChatWidgetInstance.removeChatBotInfoFromSendChatMessage()
                : Formilla.liveChatWidgetInstance.addChatBotInfoToSendChatMessage(
                    JSONData
                  ),
              Formilla.liveChatWidgetInstance.processChatBotResponse(
                hasChatBotResponded,
                JSONData
              );
          }
          (Formilla.chatMessagesContainer.scrollTop =
            Formilla.chatMessagesContainer.scrollHeight),
            (Formilla.chatTextbox.value = ""),
            Formilla.liveChatWidgetInstance.hasFileAttachmentsFeature() &&
              (JSONData.IsStartChat || hasFileAttachmentsSent) &&
              (Formilla.fileAttachmentControl.resetFileAttachments(
                JSONData.sessionId
              ),
              Formilla.fileAttachmentControl.enableFileAttachments()),
            "3" == Formilla.widgetVersion && Formilla.clearPrechatFormValues(),
            Formilla.liveChatWidgetInstance.updateTextAreaHeight(),
            Formilla.FormillaIsUserTyping(),
            JSONData.IsStatusDisplay || Formilla.chatTextbox.focus(),
            (Formilla.contentHeight = Formilla.contentElement.offsetHeight),
            JSONData.IsStartChat &&
              (Formilla.isIframe ||
                (Formilla.FormillaRealignWidget(),
                Formilla.winheight,
                Formilla.contentHeight,
                Formilla.ExtractNumber(Formilla.contentElement.style.top))),
            Formilla.showCloseBtn();
        }
      } else {
        var errormsg =
          "There was an error with your message. Please remove any illegal characters and try again.";
        0 <
        Formilla.chatMessagesContainer.innerHTML.indexOf(
          "divFormillaStartMessage"
        )
          ? (Formilla.chatMessagesContainer.innerHTML =
              Formilla.FormillaFirstMessagePaddingTop() +
              Formilla.FormillaFormatChatMessage(errormsg, !1, !1))
          : Formilla.liveChatWidgetInstance.addNewMessage(errormsg, !1, !0),
          (Formilla.chatMessagesContainer.scrollTop =
            Formilla.chatMessagesContainer.scrollHeight),
          Formilla.emailUsButton && (Formilla.emailUsButton.style.display = ""),
          (Formilla.chatTextbox.style.height = "45px");
      }
    },
    ExtractNumber: function (value) {
      var n = parseInt(value);
      return null == n || isNaN(n) ? 0 : n;
    },
    FormillaIsValidEmail: function (email) {
      if ("" == email || null == email) return !1;
      return !!/^[A-Za-z0-9']([\.\-\+]?[a-zA-Z0-9'_])*\@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,15}$/.test(
        email.trim()
      );
    },
    FormillaFirstMessagePaddingTop: function () {
      return "";
    },
    FormillaFormatChatMessage: function (
      messageText,
      bHideLabel,
      bReturnAsNodeObject,
      messageSentDate
    ) {
      return Formilla.liveChatWidgetInstance.formatChatMessage(
        messageText,
        bHideLabel,
        bReturnAsNodeObject,
        messageSentDate
      );
    },
    FormillaFormatBotActionMessage: function (
      messageText,
      actionId,
      messageGuid,
      messageSentDate
    ) {
      return Formilla.liveChatWidgetInstance.formatBotActionMessage(
        messageText,
        actionId,
        messageGuid,
        messageSentDate
      );
    },
    convertDateToUTC: function (date) {
      return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      );
    },
    HTMLEncode: function (text) {
      return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    addAttentionGrabber: function (html) {
      var iframe = window.parent.document.getElementById("formilla-frame"),
        agElement = document.createElement("div");
      (agElement.innerHTML = html),
        iframe.parentNode.insertBefore(agElement, iframe);
    },
    showAttentionGrabber: function () {
      if (!Formilla.isMobile.any()) {
        var chatButtonBottom = Formilla.chatButton
            ? parseInt(Formilla.FormillaGetStyle(Formilla.chatButton, "bottom"))
            : 0,
          onlineAg = window.parent.document.getElementById(
            "formilla-attn-grabber-ctr"
          ),
          offlineAg = window.parent.document.getElementById(
            "formilla-off-attn-grabber-ctr"
          );
        null != onlineAg &&
          "yes" != Formilla.cookieService.getCookieValue("AttnGrabberClosed") &&
          (chatButtonBottom < 0
            ? setTimeout(function () {
                onlineAg.style.display = "block";
              }, 400)
            : (onlineAg.style.display = "block"),
          (Formilla.isAttnGrabberVisible = !0)),
          null != offlineAg &&
            "yes" !=
              Formilla.cookieService.getCookieValue(
                "OfflineAttnGrabberClosed"
              ) &&
            (chatButtonBottom < 0
              ? setTimeout(function () {
                  offlineAg.style.display = "block";
                }, 400)
              : (offlineAg.style.display = "block"),
            (Formilla.isAttnGrabberVisible = !0)),
          Formilla.handleAttentionGrabberHover();
      }
    },
    handleAttentionGrabberHover: function () {
      if (
        Formilla.isAttnGrabberVisible &&
        (Formilla.isMobile.ipad() || Formilla.isMobile.Android())
      ) {
        var formillaParent = Formilla.getParentFormillaObject(),
          onlineAg = window.parent.document.getElementById(
            "formilla-attn-grabber-ctr"
          ),
          offlineAg = window.parent.document.getElementById(
            "formilla-off-attn-grabber-ctr"
          );
        null != onlineAg &&
          ((onlineAg.onmouseover = ""),
          (onlineAg.onmouseout = ""),
          formillaParent.showAttnGrabberCloseBtn(!0)),
          null != offlineAg &&
            ((offlineAg.onmouseover = ""),
            (offlineAg.onmouseout = ""),
            formillaParent.showOfflineAttnGrabberCloseBtn(!0));
      }
    },
    showAttnGrabberCloseBtn: function (bShow) {
      document.getElementById("formilla-attn-close").style.display = bShow
        ? "block"
        : "none";
    },
    hideAttnGrabber: function () {
      document.getElementById("formilla-attn-grabber-ctr").style.display =
        "none";
      var date = new Date();
      date.setTime(date.getTime() + 864e5);
      date.toGMTString();
      Formilla.getChildFormillaObject().cookieService.addCookieWithExpiration(
        "AttnGrabberClosed",
        "yes",
        date
      );
    },
    showOfflineAttnGrabberCloseBtn: function (bShow) {
      document.getElementById("formilla-off-attn-close").style.display = bShow
        ? "block"
        : "none";
    },
    hideOfflineAttnGrabber: function () {
      window.parent.document.getElementById(
        "formilla-off-attn-grabber-ctr"
      ).style.display = "none";
      var date = new Date();
      date.setTime(date.getTime() + 864e5);
      date.toGMTString();
      Formilla.getChildFormillaObject().cookieService.addCookieWithExpiration(
        "OfflineAttnGrabberClosed",
        "yes",
        date
      );
    },
    showAttnGrabber: function () {
      Formilla.isAttnGrabberVisible &&
        "yes" != Formilla.cookieService.getCookieValue("AttnGrabberClosed") &&
        Formilla.FormillaShowElement(
          window.parent.document.getElementById("formilla-attn-grabber-ctr")
        );
    },
    hideAttnGrabberWithoutExpiration: function () {
      Formilla.isAttnGrabberVisible &&
        "yes" != Formilla.cookieService.getCookieValue("AttnGrabberClosed") &&
        Formilla.FormillaHideElement(
          window.parent.document.getElementById("formilla-attn-grabber-ctr")
        );
    },
    showOfflineAttnGrabber: function () {
      Formilla.isAttnGrabberVisible &&
        "yes" !=
          Formilla.cookieService.getCookieValue("OfflineAttnGrabberClosed") &&
        Formilla.FormillaShowElement(
          window.parent.document.getElementById("formilla-off-attn-grabber-ctr")
        );
    },
    hideOfflineAttnGrabberWithoutExpiration: function () {
      Formilla.isAttnGrabberVisible &&
        "yes" !=
          Formilla.cookieService.getCookieValue("OfflineAttnGrabberClosed") &&
        Formilla.FormillaHideElement(
          window.parent.document.getElementById("formilla-off-attn-grabber-ctr")
        );
    },
    FormillaGetStyle: function (el, cssprop) {
      return el.currentStyle
        ? el.currentStyle[cssprop]
        : document.defaultView && document.defaultView.getComputedStyle
        ? document.defaultView.getComputedStyle(el, "")[cssprop]
        : el.style[cssprop];
    },
    FormillaLinkify: function (inputText) {
      var replacePattern1, replacePattern2, replacePattern3;
      return (
        (replacePattern1 =
          /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]*(?!([^<]+)?>))/gim),
        (replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim),
        (replacePattern3 =
          /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,15})+)/gim),
        inputText
          .replace(
            replacePattern1,
            '<a href="$1" class="formilla_link" style="text-decoration: underline;color: inherit !important;" target="_blank">$1</a>'
          )
          .replace(
            replacePattern2,
            '$1<a href="http://$2" class="formilla_link" style="text-decoration: underline;color: inherit !important;" target="_blank">$2</a>'
          )
          .replace(
            replacePattern3,
            '<a href="mailto:$1" class="formilla_link" style="text-decoration: underline;color: inherit !important;">$1</a>'
          )
      );
    },
    initFormillaMobile: function () {
      Formilla.isMobile = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        ipad: function () {
          return navigator.userAgent.match(/iPad/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            screen.width <= Formilla.maxResolutionForMobile &&
            (Formilla.isMobile.Android() ||
              Formilla.isMobile.BlackBerry() ||
              Formilla.isMobile.iOS() ||
              Formilla.isMobile.Opera() ||
              Formilla.isMobile.Windows())
          );
        },
      };
    },
    FormillaIsSearchBot: function () {
      return /bot|bingpreview|googlebot|mediapartners-google|yahooseeker|yahoo! slurp|crawler|spider|robot|crawling/i.test(
        navigator.userAgent
      );
    },
    FormillaGetCurrentPageUrl: function () {
      return "" != Formilla.wixPageUrl
        ? Formilla.wixPageUrl
        : Formilla.isChildIframe &&
          Formilla.location.toString() != window.parent.location.toString() &&
          "" != document.referrer.trim()
        ? document.referrer
        : Formilla.location;
    },
    FormillaGetVisitorCookieValue: function () {
      return Formilla.isDirectLinkMode
        ? Formilla.getFormillaCookie(
            "formillaVisitorGuid" + Formilla.cookieCustomerSiteGuid
          )
        : Formilla.cookieService.getCookieValue("formillaVisitorGuid");
    },
    FormillaWriteVisitorCookieValue: function (visitorGuid) {
      if (null != visitorGuid && 0 < visitorGuid.length) {
        var d = new Date();
        d.setTime(d.getTime() + 31536e7),
          Formilla.isDirectLinkMode
            ? Formilla.cookieService.addCookieWithExpiration(
                "formillaVisitorGuid" + Formilla.cookieCustomerSiteGuid,
                visitorGuid,
                d,
                !0
              )
            : Formilla.cookieService.addCookie(
                "formillaVisitorGuid",
                visitorGuid
              );
      }
    },
    FormillaShowMessageToUser: function (
      message,
      bClearChatMessagesContainer,
      playNewMessageNotification
    ) {
      var newMessage;
      0 <
        Formilla.chatMessagesContainer.innerHTML.indexOf(
          "divFormillaStartMessage"
        ) || bClearChatMessagesContainer
        ? (Formilla.chatMessagesContainer.innerHTML =
            Formilla.FormillaFirstMessagePaddingTop() + message)
        : (((newMessage =
            "3" == Formilla.widgetVersion
              ? document.createElement("li")
              : document.createElement("div")).innerHTML = message),
          Formilla.chatMessagesContainer.appendChild(newMessage.firstChild));
      playNewMessageNotification &&
        Formilla.FormillaPlayNewMessageNotification();
    },
    FormillaAdjustHeight: function (newHeight) {
      "" == newHeight
        ? Formilla.contentHeight != Formilla.contentElement.offsetHeight &&
          ((document.getElementById("divFormillaResponseBox").style.height =
            parseInt(
              document.getElementById("divFormillaResponseBox").offsetHeight
            ) +
            (Formilla.contentHeight - Formilla.contentElement.offsetHeight) +
            "px"),
          Formilla.isIframe && (Formilla.contentElement.style.top = "auto"),
          (Formilla.contentHeight = Formilla.contentElement.offsetHeight))
        : "" != Formilla.chatMessagesContainer &&
          Formilla.chatMessagesContainer.style.height != newHeight &&
          (Formilla.liveChatWidgetInstance
            .updateChatMessageContainerHeightOnAdjust &&
            (Formilla.chatMessagesContainer.style.height = newHeight),
          (Formilla.contentHeight = Formilla.contentElement.offsetHeight),
          Formilla.isIframe
            ? (Formilla.contentElement.style.top = "auto")
            : (Formilla.FormillaRealignWidget(),
              Formilla.winheight,
              Formilla.contentHeight,
              Formilla.ExtractNumber(Formilla.contentElement.style.top),
              (Formilla.contentHeight = Formilla.contentElement.offsetHeight))),
        Formilla.initFormillaDragDrop(!0);
    },
    FormillaRealignWidget: function () {},
    FormillaResizeIframeContainer: function (
      isChatVisible,
      isAttnGrabberVisible
    ) {
      if ("undefined" != typeof Wix) {
        var snippetVisible = !1;
        Formilla.liveChatWidgetInstance.hasSnippetFeature() &&
          (snippetVisible =
            Formilla.liveChatWidgetInstance.isSnippetVisible()) &&
          (isChatVisible = !1),
          Wix.resizeWindow(767, "100%"),
          setTimeout(function () {
            var size = Formilla.liveChatWidgetInstance.getWixIframeSize(
              isChatVisible,
              isAttnGrabberVisible,
              snippetVisible
            );
            Wix.resizeWindow(size.width, size.height);
          }, 100);
      }
    },
    FormillaCheckLoadedInsideWix: function () {
      var bCheckLoadedInsideWix = !1;
      try {
        bCheckLoadedInsideWix =
          ("undefined" != typeof isWixInitialized && isWixInitialized) ||
          (void 0 !== window.parent && window.parent.isWixInitialized);
      } catch (err) {
        bCheckLoadedInsideWix = !1;
      }
      return bCheckLoadedInsideWix;
    },
    FormillaCheckCookiesEnabled: function () {
      if (Formilla.isLocalStorage && Formilla.isLocalStorageAvailable())
        return !0;
      Formilla.isLocalStorage = !1;
      var secureCookie =
        Formilla.isCloudflareEditor ||
        Formilla.isWix ||
        Formilla.FormillaCheckLoadedInsideWix()
          ? ";Secure;SameSite=None"
          : "";
      return (
        (document.cookie = "testFormillacookie=1; path=/" + secureCookie),
        (cookieEnabled = -1 != document.cookie.indexOf("testFormillacookie")),
        cookieEnabled &&
          (document.cookie =
            "testFormillacookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" +
            secureCookie),
        cookieEnabled
      );
    },
    FormillaMinimizeChatWindow: function (obj) {
      "3" == Formilla.widgetVersion &&
      Formilla.isMobile.any() &&
      "divFormillaChat" == obj &&
      screen.width <= Formilla.maxResolutionForMobile
        ? ((document.getElementById("divFormillaChat").className =
            "formilladg formilla-drag chatWidgetMobileHide"),
          setTimeout(function () {
            (document.getElementById(obj).style.display = "none"),
              Formilla.adjustIframeContainer();
          }, 600))
        : Formilla.liveChatWidgetInstance.hasAnimations()
        ? Formilla.liveChatWidgetInstance.closeWidgetAnimation()
        : (document.getElementById(obj).style.display = "none"),
        Formilla.FormillaRemoveMobileOverlayStyles(),
        Formilla.cookieService.addSessionCookie("formillaIsMinimized", "yes"),
        Formilla.showLiveChatBtn(!0),
        Formilla.showAttnGrabber();
      var doNotHideBeforeResize = Formilla.isMobile.any();
      Formilla.liveChatWidgetInstance.hasAnimations() ||
        (Formilla.FormillaResizeIframeContainer(
          !1,
          Formilla.isAttnGrabberVisible
        ),
        Formilla.adjustIframeContainer(doNotHideBeforeResize));
    },
    FormillaShowMinimizeButton: function (bShow) {
      if (!Formilla.isDirectLinkMode)
        var minimizeButton = document.getElementById(
          "formilla-chat-minimize-link"
        );
      null != minimizeButton &&
        (minimizeButton.style.display = bShow ? "block" : "none");
    },
    FormillaRemoveMobileOverlayStyles: function () {
      var head = window.parent.document.getElementsByTagName("head").item(0),
        mobileCss = window.parent.document.getElementById(
          "formilla-mobile-overlay"
        );
      null != mobileCss && head.removeChild(mobileCss);
    },
    FormillaShowChatWidget: function () {
      Formilla.initFormillaChat(!0), Formilla.FormillaRealignWidget();
    },
    FormillaAdjustHeightForMobile: function () {
      ((Formilla.hasMobileCSS &&
        screen.width <= Formilla.maxResolutionForMobile) ||
        Formilla.isDirectLinkMode) &&
        setTimeout(function () {
          Formilla.contentElement &&
            Formilla.FormillaAdjustHeight(
              Formilla.contentElement.scrollHeight -
                Formilla.mobileCSSSubtractFromHeight +
                "px"
            );
        }, 500);
    },
    FormillaShowElement: function (obj) {
      null != obj && (obj.style.display = "block");
    },
    FormillaHideElement: function (obj) {
      null != obj && (obj.style.display = "none");
    },
    FormillaRemoveElement: function (obj) {
      null != obj && obj.parentNode.removeChild(obj);
    },
    FormillaLoadNotificationFiles: function () {
      var remoteMediaFolderPath =
        Formilla.formillaProtocol() +
        Formilla.formillaDomain +
        "/remoteAssets/media/";
      null == Formilla.newMessageNotificationMp3 &&
        (Formilla.newMessageNotificationMp3 = new Audio(
          remoteMediaFolderPath + "Notification_mp3.mp3"
        )),
        null == Formilla.newMessageNotificationWav &&
          (Formilla.newMessageNotificationWav = new Audio(
            remoteMediaFolderPath + "Notification_wav.wav"
          ));
    },
    FormillaPlayNewMessageNotification: function () {
      (Formilla.FormillaLoadNotificationFiles(),
      Formilla.newMessageNotificationMp3 &&
        Formilla.newMessageNotificationMp3.canPlayType &&
        "" != Formilla.newMessageNotificationMp3.canPlayType("audio/mp3"))
        ? Formilla.newMessageNotificationMp3.play()
        : Formilla.newMessageNotificationWav &&
          Formilla.newMessageNotificationWav.canPlayType &&
          "" != Formilla.newMessageNotificationWav.canPlayType("audio/wav") &&
          Formilla.newMessageNotificationWav.play();
    },
    PostEvent: function (eventName, metadata, success, error, retryCount) {
      if (0 == Formilla.loadFinished) {
        if (retryCount) {
          if (10 <= retryCount) return;
        } else retryCount = 0;
        window.setTimeout(function () {
          Formilla.PostEvent(eventName, metadata, success, error, retryCount++);
        }, 1e3);
      } else {
        var serv = new FormillaPublicApiEventService();
        success || (success = function () {}),
          error || (error = function () {}),
          serv.postEvent(eventName, metadata, success, error);
      }
    },
    SetFormillaContactDataEmail: function (email) {
      null == Formilla.contactData && (Formilla.contactData = {}),
        (Formilla.contactData.Email = email);
    },
    SetFieldAsReadOnly: function (input) {
      (input.readOnly = !0),
        (input.style.color = "#cccccc"),
        (input.style.cursor = "not-allowed");
    },
    ShowAutoMessageToUser: function (autoMessage) {
      null != autoMessage &&
        (Formilla.FormillaShowMessageToUser(autoMessage.Message, !0, !1),
        Formilla.BindAutoMessageLinks(),
        (Formilla.autoMessageTitle = autoMessage.Title),
        (Formilla.autoDisplayMessageId = autoMessage.Id),
        Formilla.liveChatWidgetInstance.hideSendChatMessageContainer(
          autoMessage.HideSendChatMessage
        ),
        Formilla.liveChatWidgetInstance.addChatBotInfoToSendChatMessage(
          autoMessage
        ),
        Formilla.UpdateAutoMessageList(
          autoMessage.Id,
          autoMessage.HowOftenIsDisplay
        ));
    },
    UpdateAutoMessageDisplayed: function (autoMessage) {
      Formilla.cookieService.addSessionCookie(
        "formillaLastAutoMessageIdDisplayed",
        autoMessage.Id
      );
    },
    BindAutoMessageLinks: function (isSnippet) {
      for (
        var links = (
            isSnippet
              ? document.getElementById(
                  Formilla.liveChatWidgetInstance.SnippetMessageContainerId
                )
              : Formilla.chatMessagesContainer.firstChild
          ).getElementsByClassName("formilla_link"),
          i = 0;
        i < links.length;
        i++
      ) {
        links[i].onclick = function () {
          var linkUrl = this.href;
          (this.onclick = function () {
            return !0;
          }),
            new FormillaPublicWebApiService().autoMessageLinkClickEvent(
              Formilla.autoDisplayMessageId,
              linkUrl,
              function (data) {
                data &&
                  data.VisitorGuid &&
                  Formilla.FormillaWriteVisitorCookieValue(data.VisitorGuid);
              },
              function () {
                console.log("Error sending smart message view event");
              }
            ),
            null != Formilla.googleAnalyticService &&
              Formilla.googleAnalyticService.smartMessageClicked(
                Formilla.autoMessageTitle
              );
        };
      }
    },
    DeleteAutoMessageCookie: function () {
      Formilla.cookieService.deleteCookie("formillaLastAutoMessageIdDisplayed"),
        Formilla.cookieService.deleteCookie("AutoMessageClicked");
    },
    UpdateAutoMessageList: function (autoMessageId, howOftenIsDisplay) {
      if (null != autoMessageId) {
        var cookieName = [
            "formillaAutoMessageList",
            "formillaAutoMessageOneTimeList",
          ][howOftenIsDisplay],
          isOneTimeAutoMessage =
            howOftenIsDisplay == FormillaEdgeWidgetHowOftenDisplay.OneTime,
          expiration = new Date();
        if (isOneTimeAutoMessage) {
          var now = new Date();
          expiration.setTime(now.getTime() + 31536e7);
        }
        var cookieValue = Formilla.cookieService.getCookieValue(cookieName);
        if (null == cookieValue)
          isOneTimeAutoMessage
            ? Formilla.cookieService.addCookieWithExpiration(
                cookieName,
                autoMessageId,
                expiration
              )
            : Formilla.cookieService.addSessionCookie(
                cookieName,
                autoMessageId
              );
        else {
          var ids = cookieValue.split(",");
          -1 == ids.indexOf(autoMessageId + "") &&
            (ids.push(autoMessageId),
            isOneTimeAutoMessage
              ? Formilla.cookieService.addCookieWithExpiration(
                  cookieName,
                  ids.join(","),
                  expiration
                )
              : Formilla.cookieService.addSessionCookie(
                  cookieName,
                  ids.join(",")
                ));
        }
        isOneTimeAutoMessage &&
          this.UpdateAutoMessageList(
            autoMessageId,
            FormillaEdgeWidgetHowOftenDisplay.EveryVisit
          );
      }
    },
    UpdateShoppingCartInternal: function (cart) {
      (Formilla.cart = cart),
        new FormillaService().updateShoppingCartInternal();
    },
    UpdateLastVisitorViewedTimestamp: function () {
      var formillaChatSession = Formilla.cookieService.getCookieValue(
          "formillaChatSession"
        ),
        url =
          Formilla.formillaProtocol() +
          Formilla.formillaDomain +
          "/ajaxhandler.aspx?rnd=" +
          Math.random();
      (url =
        url +
        "&f=updateLastVisitorViewedTimestamp&ChatSessionGuid=" +
        formillaChatSession +
        "&Guid=" +
        Formilla.guid +
        "&LastVisitorViewedTimestamp=" +
        Formilla.lastVisitorViewedTimestamp),
        Formilla.dynamicJSONTag(url);
    },
    bindFormillaWindowEvents: function () {
      Formilla.isMobile.any() || Formilla.bindFormillaWindowOnMouseMove();
    },
    bindFormillaWindowOnMouseMove: function () {
      var parent = window.parent.window;
      parent.onmousemove = function () {
        var iframe = parent.document.getElementById("formilla-frame");
        if (iframe && iframe.contentWindow.Formilla) {
          var instance = iframe.contentWindow.Formilla;
          instance.liveChatWidgetInstance &&
            instance.liveChatWidgetInstance.updateLastVisitorViewedTimestamp();
        }
      };
    },
    bindFormillaWindowEventsForIframe: function () {
      Formilla.isMobile.any()
        ? (window.onfocus = function () {
            Formilla.liveChatWidgetInstance.updateLastVisitorViewedTimestamp();
          })
        : (window.onmousemove = function () {
            Formilla.liveChatWidgetInstance &&
              Formilla.liveChatWidgetInstance.updateLastVisitorViewedTimestamp();
          });
    },
    isPageOrIframeOnFocus: function () {
      return window.parent.document.hasFocus() || document.hasFocus();
    },
    evaluteMediaQuery: function (media) {
      return window.matchMedia
        ? window.matchMedia(media).matches
        : Formilla.getMatchMedia().matchMedium(media || "all");
    },
    getMatchMedia: function () {
      if (Formilla.styleMedia) return Formilla.styleMedia;
      var styleMedia = window.styleMedia || window.media;
      if (!styleMedia) {
        var info,
          style = document.createElement("style"),
          script = document.getElementsByTagName("script")[0];
        (style.type = "text/css"),
          (style.id = "matchmediajs-test"),
          script
            ? script.parentNode.insertBefore(style, script)
            : document.head.appendChild(style),
          (info =
            ("getComputedStyle" in window &&
              window.getComputedStyle(style, null)) ||
            style.currentStyle),
          (styleMedia = {
            matchMedium: function (media) {
              var text =
                "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
              return (
                style.styleSheet
                  ? (style.styleSheet.cssText = text)
                  : (style.textContent = text),
                "1px" === info.width
              );
            },
          });
      }
      return (Formilla.styleMedia = styleMedia), Formilla.styleMedia;
    },
    hexToRgb: function (hex) {
      hex = hex.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        function (m, r, g, b) {
          return r + r + g + g + b + b;
        }
      );
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    },
    rgbToHsl: function (r, g, b) {
      (r /= 255), (g /= 255), (b /= 255);
      var h,
        s,
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        l = (max + min) / 2;
      if (max == min) h = s = 0;
      else {
        var d = max - min;
        switch (((s = 0.5 < l ? d / (2 - max - min) : d / (max + min)), max)) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
      }
      return [Math.floor(360 * h), s, l];
    },
    isChatWidgetVisible: function () {
      return (
        Formilla.contentElement &&
        Formilla.contentElement.style &&
        "none" != Formilla.contentElement.style.display
      );
    },
    isIE: function () {
      return (
        "Microsoft Internet Explorer" == navigator.appName ||
        -1 !== navigator.userAgent.indexOf("MSIE") ||
        0 < navigator.appVersion.indexOf("Trident/")
      );
    },
    isLocalStorageAvailable: function () {
      var test = "testFormilla";
      try {
        return (
          localStorage.setItem(test, test), localStorage.removeItem(test), !0
        );
      } catch (e) {
        return !1;
      }
    },
    isCloudflarePreviewMode: function (parentFormilla) {
      if (Formilla.isCloudflarePreview) {
        Formilla.isLocalStorage = !0;
        try {
          parent.document;
        } catch (e) {
          Formilla.isCloudflareEditor = !0;
        }
        null != parentFormilla &&
          null != parentFormilla &&
          ((parentFormilla.isCloudflareEditor = Formilla.isEditor),
          (parentFormilla.isLocalStorage = Formilla.isLocalStorage));
      }
    },
    isMobileView: function (mobileChatButtonText) {
      var isMobile = !1;
      if (
        !Formilla.isIframe &&
        null != mobileChatButtonText &&
        0 < mobileChatButtonText.length
      )
        try {
          screen.width <= Formilla.maxResolutionForMobile && (isMobile = !0);
        } catch (ex) {}
      return isMobile;
    },
    formillaProtocol: function () {
      return Formilla.isForcedSSL
        ? "https://"
        : "https:" == Formilla.location.protocol
        ? "https://"
        : "http://";
    },
  }),
  (CollectInputFieldType = {}),
  (CollectInputFieldType.FirstName = 0),
  (CollectInputFieldType.LastName = 1),
  (CollectInputFieldType.Email = 2),
  (CollectInputFieldType.Phone = 3),
  (CollectInputFieldType.FreeForm = 4),
  (PreChatFieldType = {}),
  (PreChatFieldType.FirstName = "FirstName"),
  (PreChatFieldType.LastName = "LastName"),
  (PreChatFieldType.Email = "Email"),
  (PreChatFieldType.Phone = "Phone"),
  (PreChatFieldType.Message = "Message"),
  (PreChatFieldType.Department = "Department"),
  (PreChatFieldType.Custom1 = "Custom1"),
  (PreChatFieldType.Custom2 = "Custom2"),
  (PreChatFieldType.Custom3 = "Custom3"),
  (FormillaPublicApiBaseService.prototype.buildContactObject = function () {
    var contact = {},
      visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
      bIsReturning = !1;
    null != visitorGuid && 0 < visitorGuid.length && (bIsReturning = !0);
    var browserLang = navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage;
    return (
      (contact.VisitorGuid = visitorGuid),
      (contact.WidgetGuid = this.isCustomerSiteGuid(Formilla.guid)
        ? null
        : Formilla.guid),
      (contact.ScriptGuid = Formilla.guid),
      (contact.CustomerSiteGuid = Formilla.csGuid),
      (contact.ChatSessionGuid = Formilla.cookieService.getCookieValue(
        "formillaChatSession"
      )),
      (contact.UserId = Formilla.userId),
      Formilla.customerEmail
        ? Formilla.FormillaIsValidEmail(Formilla.customerEmail)
          ? (contact.Email = Formilla.customerEmail)
          : (contact.Email = null)
        : (contact.Email = Formilla.customerEmail),
      (contact.FirstName = Formilla.customerFirstName),
      (contact.LastName = Formilla.customerLastName),
      (contact.Phone = Formilla.customerPhone),
      (contact.CustomField1 = Formilla.customField1),
      (contact.CustomField2 = Formilla.customField2),
      (contact.CustomField3 = Formilla.customField3),
      (contact.IsUnsubscribed = Formilla.isUnsubscribed),
      Formilla.runningOnIframe
        ? (contact.Referrer = Formilla.getParentReferrer())
        : (contact.Referrer = document.referrer),
      600 < contact.Referrer.length &&
        (contact.Referrer = contact.Referrer.substr(0, 600)),
      600 < contact.Referrer.length &&
        (contact.Referrer = contact.Referrer.substr(0, 600)),
      (contact.PageURL = Formilla.FormillaGetCurrentPageUrl() + ""),
      1e3 < contact.PageURL.length &&
        (contact.PageURL = contact.PageURL.substr(0, 1e3)),
      (contact.ScreenWidth = screen.width),
      (contact.ScreenHeight = screen.height),
      (contact.UserAgent = ""),
      (contact.Browser = ""),
      (contact.BrowserVersion = ""),
      (contact.BrowserLanguage = browserLang),
      (contact.UserHostAddress = ""),
      (contact.IsMobile = Formilla.isMobile.any() ? "True" : "False"),
      null != Formilla.signedUp_date &&
        (contact.SignedUp_date = Formilla.signedUp_date),
      Formilla.contactCustomAttributes &&
        (contact.CustomAttrs = JSON.stringify(
          Formilla.contactCustomAttributes
        )),
      Formilla.cart &&
        (contact.Cart = JSON.parse(Formilla.cart.replace(/'/g, '"'))),
      (contact.IsReturning = bIsReturning),
      (contact.IsChatWindowVisible =
        "yes" ==
        Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen")),
      (contact.ContactHmac = Formilla.contactHmac),
      contact
    );
  }),
  (FormillaPublicApiBaseService.prototype.handleResponseErrors = function (
    errors
  ) {
    if (errors && errors.constructor === Array)
      for (var i = 0; i < errors.length; i++) console.error(errors[i]);
  }),
  (FormillaPublicApiBaseService.prototype.getRequest = function (
    url,
    success,
    error
  ) {
    var _this = this,
      request = new XMLHttpRequest();
    request.open("GET", url, !0),
      (request.onreadystatechange = function () {
        if (4 == request.readyState)
          if (200 == request.status || 204 == request.status)
            try {
              var json = JSON.parse(request.responseText);
              json && json.Errors && _this.handleResponseErrors(json.Errors),
                success(json);
            } catch (e) {
              success(request.responseText);
            }
          else error();
      }),
      request.send();
  }),
  (FormillaPublicApiBaseService.prototype.getRequestIe = function (
    url,
    success,
    error
  ) {
    var _this = this;
    if (window.XDomainRequest) {
      var xdr = new XDomainRequest();
      xdr.open("get", url),
        (xdr.contentType = "text/plain"),
        (xdr.ontimeout = function (e) {
          error();
        }),
        (xdr.onerror = function (e) {
          var json = "";
          try {
            json = JSON.parse(e);
          } catch (ex) {
            json = e;
          }
          error(json);
        }),
        (xdr.onprogress = function () {}),
        (xdr.onload = function () {
          var json = "";
          try {
            (json = JSON.parse(xdr.responseText)) &&
              json.Errors &&
              _this.handleResponseErrors(json.Errors);
          } catch (e) {
            json = xdr.responseText;
          }
          success(json);
        }),
        setTimeout(function () {
          xdr.send();
        }, 0);
    }
  }),
  (FormillaPublicApiBaseService.prototype.postRequest = function (
    url,
    data,
    success,
    error
  ) {
    var _this = this,
      request = new XMLHttpRequest();
    request.open("POST", url, !0),
      request.setRequestHeader("Content-type", "application/json"),
      (request.onreadystatechange = function () {
        if (4 == request.readyState) {
          var responseText = request.responseText.replace('{"d":null}', ""),
            json = "";
          if (200 == request.status || 204 == request.status) {
            try {
              (json = JSON.parse(responseText)) &&
                json.Errors &&
                _this.handleResponseErrors(json.Errors);
            } catch (e) {
              json = responseText;
            }
            success(json);
          } else {
            try {
              (json = JSON.parse(responseText)) &&
                json.Errors &&
                _this.handleResponseErrors(json.Errors);
            } catch (e) {
              json = responseText;
            }
            error(json);
          }
        }
      }),
      request.send(data);
  }),
  (FormillaPublicApiBaseService.prototype.postRequestIe = function (
    url,
    data,
    success,
    error
  ) {
    var _this = this;
    if (window.XDomainRequest) {
      var xdr = new XDomainRequest();
      xdr.open("post", url),
        (xdr.contentType = "text/plain"),
        (xdr.ontimeout = function (e) {
          error();
        }),
        (xdr.onerror = function (e) {
          var json = "";
          try {
            json = JSON.parse(e);
          } catch (ex) {
            json = e;
          }
          error(json);
        }),
        (xdr.onprogress = function () {}),
        (xdr.onload = function () {
          var json = "";
          try {
            (json = JSON.parse(xdr.responseText)) &&
              json.Errors &&
              _this.handleResponseErrors(json.Errors);
          } catch (e) {
            json = xdr.responseText;
          }
          success(json);
        }),
        setTimeout(function () {
          xdr.send(data);
        }, 0);
    }
  }),
  (FormillaPublicApiBaseService.prototype.isOldVersionOfIe = function () {
    return -1 != navigator.appVersion.indexOf("MSIE 9");
  }),
  (FormillaPublicApiBaseService.prototype.isCustomerSiteGuid = function (guid) {
    return guid && 0 == guid.toLowerCase().indexOf("cs");
  }),
  (FormillaPublicWebApiService.prototype = Object.create(
    FormillaPublicApiBaseService.prototype
  )),
  ((FormillaPublicWebApiService.prototype.constructor =
    FormillaPublicWebApiService).prototype.pollForAction = function (
    success,
    error
  ) {
    var url = this.resourceUrl + "PollForAction",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          IsChatWindowVisible: Formilla.cookieService.getCookieValue(
            "formillaIsChatWindowOpen"
          ),
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.sendChatMessage = function (
    startChat,
    isProactive,
    isChatRequest,
    chatSessionId,
    message,
    attachment,
    customerEmail,
    customerFirstName,
    customerLastName,
    customerPhone,
    customField1,
    customField2,
    customField3,
    isRestartChat,
    autoDisplayMessageId,
    action,
    department,
    success,
    error
  ) {
    var url = this.resourceUrl + "SendChatMessage",
      contact = this.buildContactObject();
    (contact.UserEmail = customerEmail),
      (contact.UserFirstName = customerFirstName),
      (contact.UserLastName = customerLastName),
      (contact.UserPhone = customerPhone),
      (contact.UserCustomField1 = customField1),
      (contact.UserCustomField2 = customField2),
      (contact.UserCustomField3 = customField3);
    var dto = {
        data: JSON.stringify({
          Contact: contact,
          StartChat: startChat,
          IsProactive: isProactive,
          IsChatRequest: isChatRequest,
          FormillaSessionId: chatSessionId,
          Message: message,
          Action: action,
          Attachment: attachment,
          IsRestartChat: isRestartChat,
          AutoMessageDisplayedId: autoDisplayMessageId || 0,
          Department: department,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.edgeWidgetDisplay = function (
    widgetGuid,
    widgetType,
    success,
    error
  ) {
    var url = this.resourceUrl + "EdgeWidgetDisplay",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          WidgetGuid: widgetGuid,
          WidgetType: widgetType,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.edgeWidgetConversion = function (
    widgetGuid,
    email,
    sendEmailNotification,
    isConverted,
    linkUrl,
    success,
    error
  ) {
    var url = this.resourceUrl + "EdgeWidgetConversion",
      contact = this.buildContactObject(),
      emailParam = email || "";
    contact.UserEmail = emailParam;
    var sendEmailNotificationParam =
        null != sendEmailNotification ? sendEmailNotification : "",
      dto = {
        data: JSON.stringify({
          Contact: contact,
          WidgetGuid: widgetGuid,
          WidgetEmail: emailParam,
          SendEmailNotification: sendEmailNotificationParam,
          IsConverted: isConverted,
          LinkUrl: linkUrl,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.loadFormillaChatButton = function (
    isIframe,
    excludedTypes,
    edgeDisplayList,
    edgeConversionList,
    edgeLastDisplay,
    disableChat,
    isEditor,
    isDirectLinkMode,
    autoMessagesDisplayed,
    autoMessagesOneTimeDisplayed,
    lastAutoMessageIdDisplayed,
    isBottomLeftLocation,
    success,
    error
  ) {
    var url = this.resourceUrl + "LoadFormillaChatButton",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          IsIframe: isIframe,
          ExcludedTypes: excludedTypes,
          EdgeDisplayList: edgeDisplayList,
          EdgeConversionList: edgeConversionList,
          EdgeLastDisplay: edgeLastDisplay,
          DisableChat: disableChat,
          IsEditor: isEditor,
          IsDirectLinkMode: isDirectLinkMode,
          AutoMessagesDisplayed: autoMessagesDisplayed,
          AutoMessagesOneTimeDisplayed: autoMessagesOneTimeDisplayed,
          LastAutoMessageIdDisplayed: lastAutoMessageIdDisplayed,
          IsBottomLeftLocation: isBottomLeftLocation,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.offlineEmail = function (
    email,
    message,
    success,
    error
  ) {
    var url = this.resourceUrl + "OfflineEmail",
      contact = this.buildContactObject();
    contact.UserEmail = email;
    var dto = {
        data: JSON.stringify({
          Contact: contact,
          FormillaEmail: email,
          FormillaEmailMessage: message,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.loginUser = function (
    email,
    success,
    error
  ) {
    var url = this.resourceUrl + "LoginUser",
      contact = this.buildContactObject();
    email &&
      ((contact.IsEmailRequestConversion = !0), (contact.UserEmail = email));
    var dto = { data: JSON.stringify(contact) },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.autoMessageEvent = function (
    autoMessageId,
    formillaEventType,
    success,
    error
  ) {
    var url = this.resourceUrl + "AutoMessageEvent",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          AutoMessageId: autoMessageId,
          EventType: formillaEventType,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.autoMessageLinkClickEvent = function (
    autoMessageId,
    linkUrl,
    success,
    error
  ) {
    var url = this.resourceUrl + "AutoMessageLinkClick",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          AutoMessageId: autoMessageId,
          LinkUrl: linkUrl,
          SmartMessageAlreadyClicked: Formilla.autoMessageClicked,
        }),
      };
    (Formilla.autoMessageClicked = !0),
      null !=
        Formilla.cookieService.getCookieValue(
          "formillaLastAutoMessageIdDisplayed"
        ) &&
        Formilla.cookieService.addSessionCookie("AutoMessageClicked", "true");
    var jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicWebApiService.prototype.edgeWidgetLinkClickEvent = function (
    widgetGuid,
    linkUrl,
    isConverted,
    success,
    error
  ) {
    var url = this.resourceUrl + "EdgeWidgetLinkClick",
      contact = this.buildContactObject(),
      dto = {
        data: JSON.stringify({
          Contact: contact,
          LinkUrl: linkUrl,
          IsConverted: isConverted,
          WidgetGuid: widgetGuid,
        }),
      },
      jsonBody = JSON.stringify(dto);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "IE", dto.data, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaEventType = {}),
  (FormillaEventType.AutoMessageView = 0),
  (FormillaEventType.AutoMessageReply = 1),
  (FormillaPublicApiContactService.prototype = Object.create(
    FormillaPublicApiBaseService.prototype
  )),
  ((FormillaPublicApiContactService.prototype.constructor =
    FormillaPublicApiContactService).prototype.postContact = function (
    success,
    error
  ) {
    var url = this.baseUrl + this.resourceUrl,
      contact = this.buildContactObject();
    void 0 !== contact.CustomAttrs &&
      null != contact.CustomAttrs &&
      (contact.CustomAttrs = JSON.parse(contact.CustomAttrs));
    var jsonBody = JSON.stringify(contact);
    this.isOldVersionOfIe()
      ? this.postRequestIe(url + "/IE", jsonBody, success, error)
      : this.postRequest(url, jsonBody, success, error);
  }),
  (FormillaPublicApiEventService.prototype = Object.create(
    FormillaPublicApiBaseService.prototype
  )),
  ((FormillaPublicApiEventService.prototype.constructor =
    FormillaPublicApiEventService).prototype.buildEvent = function (
    eventName,
    metadata
  ) {
    var event = {},
      visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
      guid = Formilla.guid ? Formilla.guid : Formilla.csGuid;
    if (!visitorGuid && !Formilla.userId && !Formilla.customerEmail)
      throw "UserId or Email is requiered to post an event";
    return (
      (event.AppId = guid),
      (event.VisitorGuid = visitorGuid),
      (event.UserId = Formilla.userId),
      (event.Email = Formilla.customerEmail),
      (event.Name = eventName),
      (event.CustomAttributes = metadata),
      (event.ContactHmac = Formilla.contactHmac),
      event
    );
  }),
  (FormillaPublicApiEventService.prototype.postEvent = function (
    eventName,
    metadata,
    success,
    error
  ) {
    if (!eventName) throw "Event Name cannot be null or empty";
    var url = this.baseUrl + this.resourceUrl,
      event = this.buildEvent(eventName, metadata),
      jsonData = encodeURIComponent(JSON.stringify(event));
    this.getRequest(url + "?data=" + jsonData, success, error);
  }),
  (FormillaService.prototype.jsonpCall = function (url) {
    var head = document.getElementsByTagName("head").item(0),
      script = document.createElement("script");
    script.setAttribute("type", "text/javascript"),
      script.setAttribute("src", url),
      head.appendChild(script),
      setTimeout(function () {
        head.removeChild(script);
      }, 1e3);
  }),
  (FormillaService.prototype.sendSubscriberEmail = function (
    widgetGuid,
    email,
    chatSessionId,
    visitorGuid,
    callback
  ) {
    var url =
      this.baseUrl +
      "rnd=" +
      Math.random() +
      "&f=sendEdgeSubmission&widgetGuid=" +
      widgetGuid +
      "&email=" +
      encodeURIComponent(email) +
      "&pageURL=" +
      encodeURIComponent(Formilla.FormillaGetCurrentPageUrl()) +
      "&chatSessionId=" +
      chatSessionId +
      "&visitorGuid=" +
      visitorGuid +
      "&Guid=" +
      Formilla.guid +
      "&CsGuid=" +
      Formilla.csGuid +
      "&callback=" +
      callback +
      "&contactUserId=" +
      (null != Formilla.userId ? Formilla.userId : "") +
      "&contactEmail=" +
      (Formilla.customerEmail &&
      Formilla.FormillaIsValidEmail(Formilla.customerEmail)
        ? Formilla.customerEmail
        : "") +
      "&contactHmac=" +
      Formilla.contactHmac;
    this.jsonpCall(url);
  }),
  (FormillaService.prototype.getVisitorInitializationQueryString = function (
    email
  ) {
    var visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
      bIsReturning = !1,
      referrer = encodeURIComponent(document.referrer);
    600 < referrer.length && (referrer = referrer.substr(0, 600)),
      null != visitorGuid && 0 < visitorGuid.length && (bIsReturning = !0);
    var url =
      "Guid=" +
      Formilla.guid +
      "&CsGuid=" +
      Formilla.csGuid +
      "&ChatSessionGuid=" +
      Formilla.cookieService.getCookieValue("formillaChatSession") +
      "&UserEmail=" +
      encodeURIComponent(email || Formilla.customerEmail) +
      "&customerFirstName=" +
      encodeURIComponent(Formilla.customerFirstName) +
      "&customerLastName=" +
      encodeURIComponent(Formilla.customerLastName) +
      "&customerPhone=" +
      encodeURIComponent(Formilla.customerPhone) +
      "&screenWidth=" +
      screen.width +
      "&screenHeight=" +
      screen.height +
      "&CustomField1=" +
      encodeURIComponent(Formilla.customField1) +
      "&CustomField2=" +
      encodeURIComponent(Formilla.customField2) +
      "&CustomField3=" +
      encodeURIComponent(Formilla.customField3) +
      "&VisitorGuid=" +
      visitorGuid +
      "&IsReturning=" +
      bIsReturning +
      "&IsChatWindowVisible=" +
      Formilla.cookieService.getCookieValue("formillaIsChatWindowOpen") +
      "&referrer=" +
      referrer +
      "&pageURL=" +
      encodeURIComponent(Formilla.FormillaGetCurrentPageUrl()) +
      "&isMobile=" +
      (null == Formilla.isMobile.any() ? "False" : "True");
    return (url += this.addShoppingCartParameter(url, Formilla.cart));
  }),
  (FormillaService.prototype.updateShoppingCart = function (cart) {
    var iframeFormilla = Formilla.getChildFormillaObject();
    iframeFormilla && iframeFormilla.UpdateShoppingCartInternal(cart);
  }),
  (FormillaService.prototype.updateShoppingCartInternal = function () {
    var chatSessionId = Formilla.cookieService.getCookieValue(
        "formillaChatSession"
      ),
      visitorGuid = Formilla.FormillaGetVisitorCookieValue(),
      url =
        this.baseUrl +
        "rnd=" +
        Math.random() +
        "&f=updateShoppingCart&ChatSessionId=" +
        chatSessionId +
        "&VisitorGuid=" +
        visitorGuid +
        "&WidgetGuid=" +
        Formilla.guid;
    (url += this.addShoppingCartParameter(url, Formilla.cart)),
      this.jsonpCall(url);
  }),
  (FormillaService.prototype.addShoppingCartParameter = function (url, cart) {
    if (null != cart) {
      var encodedCart = encodeURIComponent(cart);
      if (url.length + encodedCart.length < this.urlLimit)
        return "&cart=" + encodedCart;
    }
    return "";
  }),
  (FormillaService.prototype.addCustomAttrsParameter = function (url, json) {
    if (null != json) {
      var encodedJson = encodeURIComponent(JSON.stringify(json));
      if (url.length + encodedJson.length < this.urlLimit)
        return "&customAttrs=" + encodedJson;
    }
    return "";
  }),
  (FormillaCookieService.prototype._addCookie = function (
    key,
    value,
    expireDate
  ) {
    if (null != value && null != value) {
      var expires = "";
      expireDate && (expires = "expires=" + expireDate.toUTCString() + ";"),
        (document.cookie =
          key + "=" + value + ";" + expires + " path=/" + this.CookieSettings);
    }
  }),
  (FormillaCookieService.prototype.getCookieValue = function (key) {
    if (this.isLocalStorage) return localStorage.getItem(key);
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++)
      if (
        ((x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="))),
        (y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1)),
        (x = x.replace(/^\s+|\s+$/g, "")) == key)
      )
        return unescape(y);
    return null;
  }),
  (FormillaCookieService.prototype.addCookie = function (key, value) {
    var date = new Date();
    date.setTime(date.getTime() + 31536e7),
      this._addStoredItem(key, value, date);
  }),
  (FormillaCookieService.prototype.addSessionCookie = function (key, value) {
    this._addStoredItem(key, value);
  }),
  (FormillaCookieService.prototype.addCookieWithExpiration = function (
    key,
    value,
    expiration
  ) {
    this._addStoredItem(key, value, expiration);
  }),
  (FormillaCookieService.prototype.deleteCookie = function (key) {
    this.isLocalStorage
      ? localStorage.removeItem(key)
      : (document.cookie =
          key +
          "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" +
          this.CookieSettings);
  }),
  (FormillaCookieService.prototype._addStoredItem = function (
    key,
    value,
    date
  ) {
    this.isLocalStorage
      ? localStorage.setItem(key, value)
      : this._addCookie(key, value, date);
  }),
  (FormillaLiveChatCookieService.prototype = Object.create(
    FormillaCookieService.prototype
  )),
  ((FormillaLiveChatCookieService.prototype.constructor =
    FormillaLiveChatCookieService).prototype.getGuid = function () {
    return Formilla.FormillaApiVersion == FormillaApiVersion.Api2 &&
      Formilla.csGuid
      ? Formilla.csGuid
      : Formilla.guid;
  }),
  (FormillaLiveChatCookieService.prototype.getCookieValue = function (key) {
    return (
      (key += this.getGuid()),
      FormillaCookieService.prototype.getCookieValue.call(this, key)
    );
  }),
  (FormillaLiveChatCookieService.prototype.addCookie = function (key, value) {
    (key += this.getGuid()),
      FormillaCookieService.prototype.addCookie.call(this, key, value);
  }),
  (FormillaLiveChatCookieService.prototype.addSessionCookie = function (
    key,
    value
  ) {
    (key += this.getGuid()),
      FormillaCookieService.prototype.addSessionCookie.call(this, key, value);
  }),
  (FormillaLiveChatCookieService.prototype.addCookieWithExpiration = function (
    key,
    value,
    expiration,
    isSkipAppendGuid
  ) {
    (null != isSkipAppendGuid && isSkipAppendGuid) || (key += this.getGuid()),
      FormillaCookieService.prototype.addCookieWithExpiration.call(
        this,
        key,
        value,
        expiration
      );
  }),
  (FormillaLiveChatCookieService.prototype.deleteCookie = function (key) {
    (key += this.getGuid()),
      FormillaCookieService.prototype.deleteCookie.call(this, key);
  }),
  (FormillaGoogleAnalyticService.prototype.userClickChatButton = function () {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.ClickChatBtn,
      ""
    );
  }),
  (FormillaGoogleAnalyticService.prototype.userStartedChat = function () {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.UserStartChat,
      ""
    );
  }),
  (FormillaGoogleAnalyticService.prototype.userRespondedToSmartMessage =
    function (autoMessageTitle) {
      this._sendGAEvent(
        this.TrackerName,
        FormillaGoogleAnalyticCategory.Chat,
        FormillaGoogleAnalyticAction.UserRespondedToSmartMessage,
        autoMessageTitle
      );
    }),
  (FormillaGoogleAnalyticService.prototype.userRespondedToChatRequest =
    function () {
      this._sendGAEvent(
        this.TrackerName,
        FormillaGoogleAnalyticCategory.Chat,
        FormillaGoogleAnalyticAction.UserRespondedToChatRequest,
        ""
      );
    }),
  (FormillaGoogleAnalyticService.prototype.conversationStarted = function () {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.Conversation,
      ""
    );
  }),
  (FormillaGoogleAnalyticService.prototype.smartMessageFired = function (
    autoMessageTitle
  ) {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.SmartMessageDisplayed,
      autoMessageTitle,
      !0
    );
  }),
  (FormillaGoogleAnalyticService.prototype.smartMessageClicked = function (
    widgetName
  ) {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.SmartMessageClicked,
      widgetName
    );
  }),
  (FormillaGoogleAnalyticService.prototype.userClickOfflineBtn = function () {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.ClickOfflineBtn,
      ""
    );
  }),
  (FormillaGoogleAnalyticService.prototype.userSendOfflineForm = function () {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.SendOfflineForm,
      ""
    );
  }),
  (FormillaGoogleAnalyticService.prototype.prechatConversion = function (
    email,
    phone
  ) {
    var label = "";
    email && (label += "Email"),
      phone && (label += (0 < label.length ? "," : "") + "Phone"),
      this._sendGAEvent(
        this.TrackerName,
        FormillaGoogleAnalyticCategory.Chat,
        FormillaGoogleAnalyticAction.PrechatConversion,
        label
      );
  }),
  (FormillaGoogleAnalyticService.prototype.agentRequestChat = function (
    agentName
  ) {
    this._sendGAEvent(
      this.TrackerName,
      FormillaGoogleAnalyticCategory.Chat,
      FormillaGoogleAnalyticAction.AgentRequestChat,
      agentName,
      !0
    );
  }),
  (FormillaGoogleAnalyticService.prototype.edgeWidgetDisplay = function (
    widgetType,
    widgetDisplayType,
    widgetName
  ) {
    this._edgeWidgetAction(
      widgetType,
      widgetDisplayType,
      widgetName,
      "Display",
      !0
    );
  }),
  (FormillaGoogleAnalyticService.prototype.edgeWidgetConversion = function (
    widgetType,
    widgetDisplayType,
    widgetName
  ) {
    this._edgeWidgetAction(
      widgetType,
      widgetDisplayType,
      widgetName,
      "Conversion",
      !1
    );
  }),
  (FormillaGoogleAnalyticService.prototype._edgeWidgetAction = function (
    widgetType,
    widgetDisplayType,
    widgetName,
    actionName,
    bNonInteraction
  ) {
    var action = "";
    widgetType == FormillaEdgeWidgetType.Custom && "Conversion" == actionName
      ? (action = FormillaGoogleAnalyticAction.SmartMessageClicked)
      : widgetType == FormillaEdgeWidgetType.Custom && "Display" == actionName
      ? (action = FormillaGoogleAnalyticAction.SmartMessageDisplayed)
      : (widgetType == FormillaEdgeWidgetType.Email
          ? (action = "Email")
          : widgetType == FormillaEdgeWidgetType.Facebook
          ? (action = "Facebook")
          : widgetType == FormillaEdgeWidgetType.Twitter &&
            (action = "Twitter"),
        widgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
          ? (action += "_LightboxPopup")
          : widgetDisplayType == FormillaEdgeWidgetDisplayType.ScrollBox
          ? (action += "_CornerWidget")
          : widgetDisplayType == FormillaEdgeWidgetDisplayType.WebsiteBar &&
            (action += "_WebsiteBar"),
        (action += "_" + actionName)),
      this._sendGAEvent(
        this.TrackerName,
        FormillaGoogleAnalyticCategory.Edge,
        action,
        widgetName,
        bNonInteraction
      );
  }),
  (FormillaGoogleAnalyticService.prototype._sendGAEvent = function (
    trackerName,
    category,
    action,
    label,
    bNonInteraction
  ) {
    if (null != this.gaInstance)
      if (
        ((bNonInteraction = null != bNonInteraction && bNonInteraction),
        "function" == typeof this.gaInstance)
      )
        if (this.isGoogleTag) {
          var eventProperties = {
            send_to: this.GA_ID,
            event_category: category,
            non_interaction: bNonInteraction,
          };
          null != label &&
            null != label &&
            "" != label &&
            (eventProperties.event_label = label),
            this.gaInstance("event", action, eventProperties);
        } else
          this.gaInstance(
            trackerName + ".send",
            "event",
            category,
            action,
            label,
            { nonInteraction: bNonInteraction }
          );
      else
        this.gaInstance.push([
          "_trackEvent",
          category,
          action,
          label,
          bNonInteraction,
        ]);
  }),
  (FormillaGoogleAnalyticCategory = {
    Chat: "Formilla_Chat",
    Edge: "Formilla_Edge",
  }),
  (FormillaGoogleAnalyticAction = {
    ClickChatBtn: "User_Clicked_Chat_Btn",
    UserStartChat: "User_Started_Chat",
    UserRespondedToSmartMessage: "User_Responded_To_Smart_Message",
    UserRespondedToChatRequest: "User_Responded_To_Chat_Request",
    Conversation: "Conversation",
    SmartMessageDisplayed: "Smart_Message_Displayed",
    SmartMessageClicked: "Smart_Message_Clicked",
    ClickOfflineBtn: "User_Clicked_Offline_Btn",
    SendOfflineForm: "User_Sent_Offline_Form",
    PrechatConversion: "Prechat_Contact_Info_Collected",
    AgentRequestChat: "Agent_Requested_Chat",
  }),
  (FormillaWidget.BottomBarWidget = null),
  (FormillaWidget.ModalOverlayId = "formillaModalBackground"),
  (FormillaWidget.prototype.initialize = function () {
    if (this.Model.HowOftenDisplay == FormillaEdgeWidgetHowOftenDisplay.Always)
      this.CookieService.deleteCookie(
        this.WidgetDisplayCookieKey + this.Model.Guid
      );
    else if (
      this.CookieService.getCookieValue(
        this.WidgetDisplayCookieKey + this.Model.Guid
      )
    )
      return;
    var time = 0;
    if (this.Model.WhenToDisplay == FormillaEdgeWidgetWhenToDisplay.TimeBased)
      if (0 == this.Model.WhenToDisplaySeconds) this._initialize();
      else {
        time = 1e3 * this.Model.WhenToDisplaySeconds;
        var _this = this;
        setTimeout(function () {
          _this._initialize();
        }, time);
      }
    else this.bindScrollEvent();
    this.Model.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal &&
      this.Model.DisplayWhenUserIsAboutToExit &&
      this.bindMouseLeaveEvent();
  }),
  (FormillaWidget.prototype._initialize = function () {
    if (0 == this.wasWidgetInitialize) {
      if (
        ((this.wasWidgetInitialize = !0),
        this.Model.WidgetDisplayType ==
          FormillaEdgeWidgetDisplayType.WebsiteBar &&
          this.isLiveChatWidgetDisplayOnMobile())
      )
        return;
      this.checkWidgetDelayConfiguration() &&
        (this.render(), this.bindEvents());
    }
  }),
  (FormillaWidget.prototype.checkWidgetDelayConfiguration = function () {
    if (this.Model.IsWidgetDelayEnabled) {
      var operator = this.Model.WidgetDelayUnit,
        value = this.Model.WidgetDelayAmount,
        lastDisplayCookieValue = this.CookieService.getCookieValue(
          this.WidgetLastDisplayCookieKey
        );
      if (lastDisplayCookieValue) {
        var lastDisplayDate = new Date(
            lastDisplayCookieValue.substr(
              0,
              lastDisplayCookieValue.indexOf("|")
            )
          ),
          milisecondsDiff = new Date().getTime() - lastDisplayDate.getTime();
        if (
          (operator == FormillaDisplayRuleOperator.Minutes
            ? milisecondsDiff / 6e4
            : operator == FormillaDisplayRuleOperator.Hours
            ? milisecondsDiff / 36e5
            : milisecondsDiff / 864e5) < value
        )
          return !1;
      }
    }
    return !0;
  }),
  (FormillaWidget.prototype.render = function () {
    var body = document.getElementsByTagName("body").item(0);
    if (
      (this.appendWidgetHtmlContent(this.ModalContainerId),
      this.appendWidgetCss(),
      !this.Model.IsPoweredByDisabled)
    ) {
      var poweredBy = document.getElementById(this.PoweredByContainer);
      Formilla.FormillaShowElement(poweredBy);
    }
    this.Model.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
      ? (this.buildModalBackground(body), this.centerModalVertically())
      : this.Model.WidgetDisplayType == FormillaEdgeWidgetDisplayType.WebsiteBar
      ? (this.Model.WidgetLocation == FormillaEdgeWidgetLocation.Bottom &&
          (FormillaWidget.BottomBarWidget = this),
        this.adjustWebsiteBarBodyPadding())
      : this.Model.WidgetDisplayType ==
          FormillaEdgeWidgetDisplayType.ScrollBox &&
        this.setScrollboxPosition(),
      this.storeDisplayCookie(),
      null != this.GoogleAnalyticService &&
        this.GoogleAnalyticService.edgeWidgetDisplay(
          this.Model.WidgetType,
          this.Model.WidgetDisplayType,
          this.Model.WidgetName
        ),
      (_this = this),
      new FormillaPublicWebApiService().edgeWidgetDisplay(
        this.Model.Guid,
        this.Model.WidgetType,
        function (visitor) {
          visitor &&
            visitor.VisitorGuid &&
            Formilla.FormillaWriteVisitorCookieValue(visitor.VisitorGuid),
            _this.edgeDisplayEventCallBack();
        },
        function () {
          console.log("Error edge dispay event");
        }
      );
  }),
  (FormillaWidget.prototype.bindEvents = function () {
    var resizeId,
      _this = this;
    (this.ResizeEventFtn = function () {
      clearTimeout(resizeId),
        (resizeId = setTimeout(function () {
          _this.Model.WidgetDisplayType ==
          FormillaEdgeWidgetDisplayType.WebsiteBar
            ? _this.adjustWebsiteBarBodyPadding()
            : _this.Model.WidgetDisplayType ==
              FormillaEdgeWidgetDisplayType.ScrollBox
            ? _this.setScrollboxPosition()
            : _this.Model.WidgetDisplayType ==
                FormillaEdgeWidgetDisplayType.Modal &&
              _this.centerModalVertically();
        }, 300));
    }),
      window.addEventListener("resize", this.ResizeEventFtn);
  }),
  (FormillaWidget.prototype.bindScrollEvent = function () {
    document.getElementsByTagName("body")[0];
    var _this = this;
    (this.WidgetScrollEventFtn = function () {
      40 <
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100 &&
        (_this._initialize(), _this.onScrollEvent(), _this.unBindScrollEvent());
    }),
      window.addEventListener("scroll", this.WidgetScrollEventFtn);
  }),
  (FormillaWidget.prototype.bindMouseLeaveEvent = function () {
    var _this = this;
    (this.MouseLeaveEventFtn = function (event) {
      var y = event.clientY;
      0 == _this.wasWidgetInitialize && y < 70
        ? (_this._initialize(), _this.unbindMouseLeaveEvent())
        : 1 == _this.wasWidgetInitialize && _this.unbindMouseLeaveEvent();
    }),
      document.body.addEventListener("mouseleave", this.MouseLeaveEventFtn);
  }),
  (FormillaWidget.prototype.unbindMouseLeaveEvent = function () {
    this.removeEventListener(
      document.body,
      "mouseleave",
      this.MouseLeaveEventFtn
    );
  }),
  (FormillaWidget.prototype.unBindScrollEvent = function () {
    this.removeEventListener(window, "scroll", this.WidgetScrollEventFtn);
  }),
  (FormillaWidget.prototype.onScrollEvent = function () {}),
  (FormillaWidget.prototype.edgeDisplayEventCallBack = function () {}),
  (FormillaWidget.prototype.onConversionComplete = function (
    email,
    sendEmailNotification,
    linkUrl
  ) {
    this.updateConvertedWidgetList(),
      null == this.GoogleAnalyticService ||
        this.IsConverted ||
        this.GoogleAnalyticService.edgeWidgetConversion(
          this.Model.WidgetType,
          this.Model.WidgetDisplayType,
          this.Model.WidgetName
        ),
      (_this = this),
      new FormillaPublicWebApiService().edgeWidgetConversion(
        this.Model.Guid,
        email,
        sendEmailNotification,
        this.IsConverted,
        linkUrl,
        function (visitor) {
          visitor &&
            visitor.VisitorGuid &&
            Formilla.FormillaWriteVisitorCookieValue(visitor.VisitorGuid),
            (_this.IsConverted = !0),
            _this.edgeConversionEventCallBack();
        },
        function () {
          console.log("Error edge conversion event");
        }
      );
  }),
  (FormillaWidget.prototype.edgeConversionEventCallBack = function () {}),
  (FormillaWidget.prototype.storeDisplayCookie = function () {
    var expiration = new Date();
    expiration.setTime(expiration.getTime() + 31536e7);
    var now = new Date();
    this.CookieService.addCookieWithExpiration(
      this.WidgetLastDisplayCookieKey,
      this.formatDate(now) + "|" + this.Model.Id,
      expiration
    ),
      this.updateViewedWidgetList(),
      this.Model.HowOftenDisplay != FormillaEdgeWidgetHowOftenDisplay.Always &&
        (this.Model.HowOftenDisplay !=
        FormillaEdgeWidgetHowOftenDisplay.EveryVisit
          ? (this.Model.HowOftenDisplay ==
            FormillaEdgeWidgetHowOftenDisplay.OneTime
              ? expiration.setTime(now.getTime() + 31536e7)
              : this.Model.HowOftenDisplay ==
                FormillaEdgeWidgetHowOftenDisplay.Days
              ? expiration.setTime(
                  now.getTime() +
                    24 * this.Model.HowOftenDisplayTimePeriod * 60 * 60 * 1e3
                )
              : this.Model.HowOftenDisplay ==
                FormillaEdgeWidgetHowOftenDisplay.Weeks
              ? expiration.setTime(
                  now.getTime() +
                    7 *
                      this.Model.HowOftenDisplayTimePeriod *
                      24 *
                      60 *
                      60 *
                      1e3
                )
              : this.Model.HowOftenDisplay ==
                FormillaEdgeWidgetHowOftenDisplay.Months
              ? expiration.setTime(
                  now.getTime() +
                    31 *
                      this.Model.HowOftenDisplayTimePeriod *
                      24 *
                      60 *
                      60 *
                      1e3
                )
              : this.Model.HowOftenDisplay ==
                  FormillaEdgeWidgetHowOftenDisplay.Years &&
                expiration.setTime(
                  now.getTime() +
                    365 *
                      this.Model.HowOftenDisplayTimePeriod *
                      24 *
                      60 *
                      60 *
                      1e3
                ),
            this.CookieService.addCookieWithExpiration(
              this.WidgetDisplayCookieKey + this.Model.Guid,
              "True",
              expiration
            ))
          : this.CookieService.addSessionCookie(
              this.WidgetDisplayCookieKey + this.Model.Guid,
              "True"
            ));
  }),
  (FormillaWidget.prototype.formatDate = function (date) {
    return (
      (date = Formilla.convertDateToUTC(date)).getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds() +
      "Z"
    );
  }),
  (FormillaWidget.prototype.updateViewedWidgetList = function () {
    var expiration = new Date(),
      cookieValue = this.CookieService.getCookieValue(this.WidgetDisplayList);
    if (
      (expiration.setTime(expiration.getTime() + 31536e7), null == cookieValue)
    )
      this.CookieService.addCookieWithExpiration(
        this.WidgetDisplayList,
        this.Model.Id,
        expiration
      );
    else {
      var ids = cookieValue.split(","),
        indexOfId = ids.indexOf(this.Model.Id + "");
      -1 < indexOfId && ids.splice(indexOfId, 1),
        25 == ids.length && ids.shift(),
        ids.push(this.Model.Id),
        this.CookieService.addCookieWithExpiration(
          this.WidgetDisplayList,
          ids.join(","),
          expiration
        );
    }
  }),
  (FormillaWidget.prototype.updateConvertedWidgetList = function () {
    var expiration = new Date(),
      cookieValue = this.CookieService.getCookieValue(
        this.WidgetConversionList
      );
    if (
      (expiration.setTime(expiration.getTime() + 31536e7), null == cookieValue)
    )
      this.CookieService.addCookieWithExpiration(
        this.WidgetConversionList,
        this.Model.Id,
        expiration
      );
    else {
      var ids = cookieValue.split(","),
        indexOfId = ids.indexOf(this.Model.Id + "");
      -1 < indexOfId && ids.splice(indexOfId, 1),
        25 == ids.length && ids.shift(),
        ids.push(this.Model.Id),
        this.CookieService.addCookieWithExpiration(
          this.WidgetConversionList,
          ids.join(","),
          expiration
        );
    }
  }),
  (FormillaWidget.prototype.getVisitorGuid = function () {
    return Formilla.FormillaGetVisitorCookieValue();
  }),
  (FormillaWidget.prototype.bindWidgetCloseEvent = function (
    elementId,
    modalId
  ) {
    var dom = document.getElementById(elementId),
      _this = this;
    dom.addEventListener("click", function (event) {
      _this.onCloseClick(modalId);
    });
  }),
  (FormillaWidget.prototype.onCloseClick = function (modalId) {
    var modal = document.getElementById(modalId);
    if (
      (Formilla.FormillaHideElement(modal),
      this.Model.WidgetDisplayType == FormillaEdgeWidgetDisplayType.WebsiteBar)
    )
      this.removeWebsiteBarBodyPadding(),
        this.removeEventListener(window, "resize", this.ResizeEventFtn);
    else if (
      this.Model.WidgetDisplayType == FormillaEdgeWidgetDisplayType.Modal
    ) {
      var overlay = document.getElementById(FormillaWidget.ModalOverlayId);
      Formilla.FormillaHideElement(overlay);
    }
  }),
  (FormillaWidget.prototype.appendWidgetHtmlContent = function (
    containerDivId
  ) {
    var body = document.getElementsByTagName("body").item(0),
      divWidgetContainer = document.createElement("div");
    divWidgetContainer.setAttribute("id", containerDivId),
      (divWidgetContainer.innerHTML = this.Model.HtmlContent),
      body.appendChild(divWidgetContainer);
  }),
  (FormillaWidget.prototype.appendWidgetCss = function () {
    var head = document.getElementsByTagName("head").item(0),
      style = document.createElement("style");
    (style.type = "text/css"),
      style.styleSheet
        ? (style.styleSheet.cssText = this.Model.Css)
        : style.appendChild(document.createTextNode(this.Model.Css)),
      head.appendChild(style);
  }),
  (FormillaWidget.prototype.centerModalVertically = function () {
    var widget = document.getElementById(this.WidgetContainer),
      widgetHeight = widget.offsetHeight,
      pageHeight = document.documentElement.clientHeight,
      top = "30%";
    0 != widgetHeight && (top = (pageHeight - widgetHeight) / 2 + "px"),
      (widget.style.top = top);
  }),
  (FormillaWidget.prototype.getWidgetHeight = function () {
    return document.getElementById(this.WidgetContainer).offsetHeight;
  }),
  (FormillaWidget.prototype.isLiveChatWidgetDisplayOnMobile = function () {
    return (
      screen.width <= Formilla.maxResolutionForMobile &&
      null != document.getElementById("formilla-mobile-overlay")
    );
  }),
  (FormillaWidget.prototype.setScrollboxPosition = function () {
    var margin = 30;
    null != FormillaWidget.BottomBarWidget &&
      (margin = FormillaWidget.BottomBarWidget.getWidgetHeight() + 5);
    var widget = document.getElementById(this.WidgetContainer),
      widgetHeight = widget.offsetHeight,
      pageHeight = document.documentElement.clientHeight,
      top = "30%";
    0 != widgetHeight && (top = pageHeight - widgetHeight - margin + "px"),
      (widget.style.top = top),
      this.Model.WidgetLocation == FormillaEdgeWidgetLocation.BottomLeftCorner
        ? (widget.style.left = "30px")
        : this.Model.WidgetLocation ==
            FormillaEdgeWidgetLocation.BottomRightCorner &&
          (widget.style.right = "30px");
  }),
  (FormillaWidget.prototype.buildModalBackground = function (body) {
    var modalBackgroundCreated = document.getElementById(
      FormillaWidget.ModalOverlayId
    );
    if (modalBackgroundCreated)
      Formilla.FormillaShowElement(modalBackgroundCreated);
    else {
      var modalBackground = document.createElement("div");
      modalBackground.setAttribute("id", FormillaWidget.ModalOverlayId),
        (modalBackground.style.width = "100%"),
        (modalBackground.style.height = "100%"),
        (modalBackground.style.position = "fixed"),
        (modalBackground.style.top = "0"),
        (modalBackground.style.zIndex = "9999999"),
        (modalBackground.style.left = "0"),
        (modalBackground.style.background = "#000"),
        (modalBackground.style.msFilters =
          "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"),
        (modalBackground.style.filter = "alpha(opacity=50)"),
        (modalBackground.style.mozOpacity = ".5"),
        (modalBackground.style.khtmlOpacity = ".5"),
        (modalBackground.style.webkitFilter = ".5"),
        (modalBackground.style.oOpacity = ".5"),
        (modalBackground.style.opacity = ".5"),
        body.appendChild(modalBackground);
    }
  }),
  (FormillaWidget.prototype.getPageAbsoluteHeight = function () {
    var body = document.body,
      html = document.documentElement;
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }),
  (FormillaWidget.prototype.getElementCumulativeOffset = function (element) {
    var height = 0;
    height =
      "fixed" == Formilla.FormillaGetStyle(element, "position")
        ? "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight
        : this.getPageAbsoluteHeight();
    var initialHeight = element.offsetHeight;
    if (!element.className.indexOf) return this.getSvgCumulativeOffset(element);
    for (
      var top = 0;
      (top += element.offsetTop || 0),
        element.offsetBottom || 0,
        (element = element.offsetParent);

    );
    return { top: top, bottom: height - top - initialHeight };
  }),
  (FormillaWidget.prototype.getSvgCumulativeOffset = function (element) {
    var rect = element.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom };
  }),
  (FormillaWidget.prototype._adjustDomElementTopBottom = function (
    node,
    widgetContainer,
    set
  ) {
    var processChildren;
    if (
      ((processChildren = set
        ? this._setDomElementTopBottom(node, widgetContainer)
        : this._resetDomElementTopBottom(node)),
      node.hasChildNodes() && processChildren)
    )
      for (var i = 0; i < node.childNodes.length; i++)
        1 == node.childNodes[i].nodeType &&
          this._adjustDomElementTopBottom(
            node.childNodes[i],
            widgetContainer,
            set
          );
  }),
  (FormillaWidget.prototype._getWebsiteResetAttr = function () {
    return "formilla-website-reset-" + this.Model.WidgetLocation;
  }),
  (FormillaWidget.prototype._setDomElementTopBottom = function (
    node,
    widgetContainer
  ) {
    var position = Formilla.FormillaGetStyle(node, "position");
    if (
      (node.className.indexOf &&
        -1 < node.className.toLowerCase().indexOf("formilla")) ||
      (node.getAttribute("id") &&
        -1 < node.getAttribute("id").toLowerCase().indexOf("formilla"))
    )
      return !1;
    if ("none" == Formilla.FormillaGetStyle(node, "display")) return !1;
    if ("fixed" == position || "absolute" == position)
      if (this.Model.WidgetLocation == FormillaEdgeWidgetLocation.Top) {
        var previousTop = null;
        node.getAttribute(this._getWebsiteResetAttr()) &&
          (previousTop = parseInt(
            node.getAttribute(this._getWebsiteResetAttr())
          ));
        var cumulativeTop = this.getElementCumulativeOffset(node).top;
        null != previousTop &&
          (cumulativeTop =
            cumulativeTop -
            parseInt(Formilla.FormillaGetStyle(node, "top")) +
            previousTop);
        var top =
          null != previousTop
            ? previousTop
            : Formilla.FormillaGetStyle(node, "top");
        if (
          (top || (top = 0),
          "NaN" != parseInt(top) &&
            cumulativeTop < widgetContainer.offsetHeight)
        )
          return (
            (node.style.top =
              parseInt(top) + widgetContainer.offsetHeight + "px"),
            node.getAttribute(this._getWebsiteResetAttr()) ||
              node.setAttribute(this._getWebsiteResetAttr(), parseInt(top)),
            !1
          );
      } else {
        var previosBottom = null;
        node.getAttribute(this._getWebsiteResetAttr()) &&
          (previosBottom = parseInt(
            node.getAttribute(this._getWebsiteResetAttr())
          ));
        var cumulativeBottom = this.getElementCumulativeOffset(node).bottom;
        null != previosBottom &&
          (cumulativeBottom =
            cumulativeBottom -
            parseInt(Formilla.FormillaGetStyle(node, "bottom")) +
            previosBottom);
        var bottom =
          null != previosBottom
            ? previosBottom
            : Formilla.FormillaGetStyle(node, "bottom");
        if (
          (bottom || (bottom = 0),
          "NaN" != parseInt(bottom) &&
            cumulativeBottom < widgetContainer.offsetHeight)
        )
          return (
            (node.style.bottom =
              parseInt(bottom) + widgetContainer.offsetHeight + "px"),
            node.getAttribute(this._getWebsiteResetAttr()) ||
              node.setAttribute(this._getWebsiteResetAttr(), parseInt(bottom)),
            !1
          );
      }
    return !0;
  }),
  (FormillaWidget.prototype._resetDomElementTopBottom = function (node) {
    if (node.hasAttribute(this._getWebsiteResetAttr())) {
      var previousValue = node.getAttribute(this._getWebsiteResetAttr());
      return (
        this.Model.WidgetLocation == FormillaEdgeWidgetLocation.Top
          ? (node.style.top = previousValue + "px")
          : (node.style.bottom = previousValue + "px"),
        !1
      );
    }
    return !0;
  }),
  (FormillaWidget.prototype.adjustWebsiteBarBodyPadding = function () {
    var body = document.getElementsByTagName("body").item(0),
      widgetContainer = document.getElementById(this.WidgetContainer);
    this.Model.WidgetLocation == FormillaEdgeWidgetLocation.Top &&
      (body.style.paddingTop = widgetContainer.offsetHeight + "px");
    var _this = this;
    window.setTimeout(function () {
      _this._adjustDomElementTopBottom(
        document.getElementsByTagName("body")[0],
        widgetContainer,
        !0
      );
    }, 300);
  }),
  (FormillaWidget.prototype.removeWebsiteBarBodyPadding = function () {
    var body = document.getElementsByTagName("body").item(0);
    this.Model.WidgetLocation == FormillaEdgeWidgetLocation.Top
      ? (body.style.paddingTop = "0px")
      : (body.style.paddingBottom = "0px"),
      this._adjustDomElementTopBottom(
        document.getElementsByTagName("body")[0],
        null,
        !1
      );
  }),
  (FormillaWidget.prototype.removeEventListener = function (
    element,
    key,
    event
  ) {
    element.removeEventListener
      ? element.removeEventListener(key, event)
      : element.detachEvent && element.detachEvent(key, event);
  }),
  (FormillaWidget.prototype.formillaSetInnerHtml = function (obj, value) {
    null != obj && (obj.innerHTML = value);
  }),
  (FormillaEdgeWidgetType = { Email: 0, Facebook: 1, Twitter: 2, Custom: 3 }),
  (FormillaEdgeWidgetDisplayType = { Modal: 0, WebsiteBar: 1, ScrollBox: 2 }),
  (FormillaEdgeWidgetTemplate = { Template1: 0, Template2: 1 }),
  (FormillaEdgeWidgetHowOftenDisplay = {
    EveryVisit: 0,
    OneTime: 1,
    Days: 2,
    Weeks: 3,
    Months: 4,
    Years: 5,
    Always: 6,
  }),
  (FormillaEdgeWidgetLocation = {
    Center: 0,
    BottomLeftCorner: 1,
    BottomRightCorner: 2,
    Top: 3,
    Bottom: 4,
  }),
  (FormillaEdgeWidgetWhenToDisplay = { TimeBased: 0, OnScroll: 1 }),
  (FormillaApiVersion = { Api1: 0, Api2: 1 }),
  (FormillaDisplayRuleCriteria = {
    Url: "Url",
    ReferrerUrl: "ReferrerUrl",
    Device: "Device",
    CustomField1: "CustomField1",
    CustomField2: "CustomField2",
    CustomField3: "CustomField3",
    UserAction: "UserAction",
    TimePassed: "TimePassed",
  }),
  (FormillaDisplayRuleOperator = { Minutes: 0, Hours: 1, Days: 2 }),
  (FormillaEmailBaseWidget.prototype = Object.create(FormillaWidget.prototype)),
  ((FormillaEmailBaseWidget.prototype.constructor =
    FormillaEmailBaseWidget).prototype.render = function () {
    FormillaWidget.prototype.render.call(this);
    var emailInput = document.getElementById(_this.EmailInputId);
    Formilla.customerEmail
      ? ((emailInput.value = Formilla.customerEmail),
        Formilla.SetFieldAsReadOnly(emailInput))
      : null != Formilla.contactData &&
        Formilla.contactData.Email &&
        ((emailInput.value = Formilla.contactData.Email),
        Formilla.contactData.IsContact &&
          Formilla.SetFieldAsReadOnly(emailInput));
  }),
  (FormillaEmailBaseWidget.prototype.bindEvents = function () {
    FormillaWidget.prototype.bindEvents.call(this),
      FormillaWidget.prototype.bindWidgetCloseEvent.call(
        this,
        this.CloseElementId,
        this.ModalContainerId
      ),
      this.bindSubscriberSubmitBtn(),
      this.bindSubscriberContinueBtn();
  }),
  (FormillaEmailBaseWidget.prototype.bindSubscriberSubmitBtn = function () {
    var _this = this;
    document
      .getElementById(this.SubscribeBtnId)
      .addEventListener("click", function (event) {
        var email = document.getElementById(_this.EmailInputId).value,
          chatSessionId = new FormillaLiveChatCookieService().getCookieValue(
            "formillaChatSession"
          ),
          visitorGuid = Formilla.FormillaGetVisitorCookieValue();
        _this.validateEmail(email) &&
          ((email = email.trim()),
          Formilla.SetFormillaContactDataEmail(email),
          _this.FormillaService.sendSubscriberEmail(
            _this.Model.Guid,
            email,
            chatSessionId,
            visitorGuid,
            _this.ClassName + ".Instance.onSubscriptionComplete"
          ));
      });
  }),
  (FormillaEmailBaseWidget.prototype.bindSubscriberContinueBtn = function () {
    var _this = this;
    document
      .getElementById(this.EmailContinuetBtn)
      .addEventListener("click", function (event) {
        _this.onCloseClick(_this.ModalContainerId);
      });
  }),
  (FormillaEmailBaseWidget.prototype.validateEmail = function (email) {
    var emailInput = document.getElementById(this.EmailInputId);
    return email && Formilla.FormillaIsValidEmail(email)
      ? ((emailInput.className = emailInput.className.replace(
          "formillaEmailInputValidationError",
          ""
        )),
        !0)
      : (-1 ==
          emailInput.className.indexOf("formillaEmailInputValidationError") &&
          (emailInput.className += " formillaEmailInputValidationError"),
        !1);
  }),
  (FormillaEmailBaseWidget.prototype.onSubscriptionComplete = function (
    sendEmailNotification,
    successText
  ) {
    var email = document.getElementById(this.EmailInputId).value,
      bodyContainer = document.getElementById(this.EmailBodyContainerId);
    Formilla.FormillaHideElement(bodyContainer);
    var successTextContainer = document.getElementById(
      this.EmailSuccessTextContainer
    );
    this.formillaSetInnerHtml(successTextContainer, successText);
    var successContainer = document.getElementById(this.EmailSuccessContainer);
    Formilla.FormillaShowElement(successContainer),
      this.CookieService.addCookie(this.EmailSubmittedCookieKey, "True"),
      this.onConversionComplete(email, sendEmailNotification);
  }),
  (FormillaEmailModalWidget.prototype = Object.create(
    FormillaEmailBaseWidget.prototype
  )),
  ((FormillaEmailModalWidget.prototype.constructor =
    FormillaEmailModalWidget).Instance = null),
  (FormillaEmailWebsiteBarWidget.prototype = Object.create(
    FormillaEmailBaseWidget.prototype
  )),
  ((FormillaEmailWebsiteBarWidget.prototype.constructor =
    FormillaEmailWebsiteBarWidget).Instance = null),
  (FormillaEmailWebsiteBarWidget.prototype.onSubscriptionComplete = function (
    sendEmailNotification,
    successText
  ) {
    FormillaEmailBaseWidget.prototype.onSubscriptionComplete.call(
      this,
      sendEmailNotification,
      successText
    ),
      FormillaEmailBaseWidget.prototype.adjustWebsiteBarBodyPadding.call(this);
  }),
  (FormillaEmailWebsiteBarWidget.prototype.validateEmail = function (email) {
    var result = FormillaEmailBaseWidget.prototype.validateEmail.call(
        this,
        email
      ),
      emailErrorContainer = document.getElementById(
        this.EmailErrorIconContainerId
      );
    return (
      result
        ? Formilla.FormillaHideElement(emailErrorContainer)
        : ((emailErrorContainer.style.display = "inline-block"),
          this.adjustWebsiteBarBodyPadding()),
      result
    );
  }),
  (FormillaEmailScrollBoxWidget.prototype = Object.create(
    FormillaEmailBaseWidget.prototype
  )),
  ((FormillaEmailScrollBoxWidget.prototype.constructor =
    FormillaEmailScrollBoxWidget).Instance = null),
  (FormillaFacebookBaseWidget.prototype = Object.create(
    FormillaWidget.prototype
  )),
  ((FormillaFacebookBaseWidget.prototype.constructor =
    FormillaFacebookBaseWidget).prototype.render = function () {
    FormillaWidget.prototype.render.call(this);
  }),
  (FormillaFacebookBaseWidget.prototype.bindEvents = function () {
    FormillaWidget.prototype.bindEvents.call(this),
      FormillaWidget.prototype.bindWidgetCloseEvent.call(
        this,
        this.CloseElementId,
        this.ModalContainerId
      ),
      this.bindLikeSubmitBtn();
  }),
  (FormillaFacebookBaseWidget.prototype.bindLikeSubmitBtn = function () {
    var _this = this;
    (this.BlurEventFtn = function () {
      setTimeout(function () {
        document.activeElement.id === _this.FacebookIframeId &&
          (_this.CookieService.addCookie(
            _this.FacebookPageLikedCookieKey,
            "True"
          ),
          _this.onConversionComplete(),
          _this.unBindBlurEvent());
      }, 100);
    }),
      focus(),
      addEventListener("blur", this.BlurEventFtn);
  }),
  (FormillaFacebookBaseWidget.prototype.unBindBlurEvent = function () {
    removeEventListener("blur", this.BlurEventFtn);
  }),
  (FormillaFacebookModalWidget.prototype = Object.create(
    FormillaFacebookBaseWidget.prototype
  )),
  ((FormillaFacebookModalWidget.prototype.constructor =
    FormillaFacebookModalWidget).Instance = null),
  (FormillaFacebookWebsiteBarWidget.prototype = Object.create(
    FormillaFacebookBaseWidget.prototype
  )),
  ((FormillaFacebookWebsiteBarWidget.prototype.constructor =
    FormillaFacebookWebsiteBarWidget).Instance = null),
  (FormillaFacebookScrollBoxWidget.prototype = Object.create(
    FormillaFacebookBaseWidget.prototype
  )),
  ((FormillaFacebookScrollBoxWidget.prototype.constructor =
    FormillaFacebookScrollBoxWidget).Instance = null),
  (FormillaTwitterBaseWidget.prototype = Object.create(
    FormillaWidget.prototype
  )),
  ((FormillaTwitterBaseWidget.prototype.constructor =
    FormillaTwitterBaseWidget).prototype.render = function () {
    FormillaWidget.prototype.render.call(this);
  }),
  (FormillaTwitterBaseWidget.prototype.bindEvents = function () {
    FormillaWidget.prototype.bindEvents.call(this),
      FormillaWidget.prototype.bindWidgetCloseEvent.call(
        this,
        this.CloseElementId,
        this.ModalContainerId
      ),
      this.bindFollowSubmitBtn();
  }),
  (FormillaTwitterBaseWidget.prototype.bindFollowSubmitBtn = function () {
    var _this = this;
    (this.BlurEventFtn = function () {
      setTimeout(function () {
        document.activeElement.id === _this.TwitterIframeId &&
          (_this.CookieService.addCookie(
            _this.TwitterUserFollowedCookieKey,
            "True"
          ),
          _this.onConversionComplete(),
          _this.unBindBlurEvent());
      }, 100);
    }),
      focus(),
      addEventListener("blur", this.BlurEventFtn);
  }),
  (FormillaTwitterBaseWidget.prototype.unBindBlurEvent = function () {
    removeEventListener("blur", this.BlurEventFtn);
  }),
  (FormillaTwitterModalWidget.prototype = Object.create(
    FormillaTwitterBaseWidget.prototype
  )),
  (FormillaTwitterModalWidget.prototype.constructor =
    FormillaTwitterModalWidget),
  (FormillaTwitterWebsiteBarWidget.prototype = Object.create(
    FormillaTwitterBaseWidget.prototype
  )),
  (FormillaTwitterWebsiteBarWidget.prototype.constructor =
    FormillaTwitterModalWidget),
  (FormillaTwitterScrollboxWidget.prototype = Object.create(
    FormillaTwitterBaseWidget.prototype
  )),
  (FormillaTwitterScrollboxWidget.prototype.constructor =
    FormillaTwitterModalWidget),
  (FormillaCustomBaseWidget.prototype = Object.create(
    FormillaWidget.prototype
  )),
  ((FormillaCustomBaseWidget.prototype.constructor =
    FormillaCustomBaseWidget).prototype.render = function () {
    FormillaWidget.prototype.render.call(this);
  }),
  (FormillaCustomBaseWidget.prototype.bindEvents = function () {
    FormillaWidget.prototype.bindEvents.call(this),
      FormillaWidget.prototype.bindWidgetCloseEvent.call(
        this,
        this.CloseElementId,
        this.ModalContainerId
      ),
      this.bindContinueBtn(this.ContinueBtnId, this.ModalContainerId),
      this.bindEdgeWidgetLinks();
  }),
  (FormillaCustomBaseWidget.prototype.bindContinueBtn = function (
    elementId,
    modalId
  ) {
    var dom = document.getElementById(elementId),
      _this = this;
    (this.ClickEventFtn = function (e) {
      e.preventDefault();
      var linkUrl = this.getAttribute("href");
      _this.onConversionComplete(null, null, linkUrl),
        _this.unBindClickEvent(dom),
        "" == dom.href
          ? _this.onCloseClick(modalId)
          : (_this.onCloseClick(modalId), window.open(dom.href, dom.target));
    }),
      dom.addEventListener("click", this.ClickEventFtn);
  }),
  (FormillaCustomBaseWidget.prototype.unBindClickEvent = function (element) {
    this.removeEventListener(element, "click", this.ClickEventFtn);
  }),
  (FormillaCustomBaseWidget.prototype.bindEdgeWidgetLinks = function () {
    for (
      var links = document
          .getElementById(this.CustomBodyContainerId)
          .getElementsByTagName("a"),
        that = this,
        i = 0;
      i < links.length;
      i++
    ) {
      var link = links[i],
        linkUrl = link.getAttribute("href");
      null != linkUrl &&
        "" != linkUrl &&
        link.className != that.ConversionBtnClass &&
        (link.onclick = function () {
          this.onclick = function () {
            return !0;
          };
          var service = new FormillaPublicWebApiService(),
            href = this.getAttribute("href");
          service.edgeWidgetLinkClickEvent(
            that.Model.Guid,
            href,
            that.IsConverted,
            function (data) {
              data &&
                data.VisitorGuid &&
                Formilla.FormillaWriteVisitorCookieValue(data.VisitorGuid);
            },
            function () {
              console.log("Error sending edge widget click event");
            }
          ),
            that.updateConvertedWidgetList(),
            null == that.GoogleAnalyticService ||
              that.IsConverted ||
              that.GoogleAnalyticService.edgeWidgetConversion(
                that.Model.WidgetType,
                that.Model.WidgetDisplayType,
                that.Model.WidgetName
              ),
            (that.IsConverted = !0);
        });
    }
  }),
  (FormillaCustomModalWidget.prototype = Object.create(
    FormillaCustomBaseWidget.prototype
  )),
  ((FormillaCustomModalWidget.prototype.constructor =
    FormillaCustomModalWidget).Instance = null),
  (FormillaCustomWebsiteBarWidget.prototype = Object.create(
    FormillaCustomBaseWidget.prototype
  )),
  ((FormillaCustomWebsiteBarWidget.prototype.constructor =
    FormillaCustomWebsiteBarWidget).Instance = null),
  (FormillaCustomScrollBoxWidget.prototype = Object.create(
    FormillaCustomBaseWidget.prototype
  )),
  ((FormillaCustomScrollBoxWidget.prototype.constructor =
    FormillaCustomScrollBoxWidget).Instance = null),
  "undefined" != typeof FormillaOrig && (Formilla = FormillaOrig),
  (FormillaBaseLiveChatWidget.prototype.hasProactivePopup = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.setMessageContainerHeight =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.showPopupFooterBottom = function () {}),
  (FormillaBaseLiveChatWidget.prototype.onEmailAddressValidationSuccess =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onEmailAddressValidationError =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onEmailMessageValidationSuccess =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onEmailMessageValidationError =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onChatEmailAddressValidationSuccess =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onChatEmailAddressValidationError =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.getSendEmailHtmlResponse =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.getSendEmailCallbackHtmlResponse =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onChatSessionEnded = function () {
    (Formilla.chatTextbox.style.display = "none"),
      (Formilla.chatEmailTextbox.style.display = "inline-block"),
      Formilla.FormillaShowElement(Formilla.chatEmailTextboxContainer),
      Formilla.FormillaShowElement(Formilla.popupFooterBottom),
      Formilla.FormillaHideElement(Formilla.popupChatFooter),
      Formilla.FormillaHideElement(Formilla.agentTypingBar);
  }),
  (FormillaBaseLiveChatWidget.prototype.onProactiveMinimized = function () {}),
  (FormillaBaseLiveChatWidget.prototype.onHideFormillaChatMobile =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.hasPrechat = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.showAgentPicture = function () {}),
  (FormillaBaseLiveChatWidget.prototype.onKeyupEmailValidationSuccess =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onKeyupEmailValidationError =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onInitFormillaChatFields = function () {
    (Formilla.chatEmailTextbox = document.getElementById(
      "txtFormillaChatEmailTextbox"
    )),
      (Formilla.chatEmailTextboxContainer = document.getElementById(
        "txtFormillaChatEmailTextboxContainer"
      ));
  }),
  (FormillaBaseLiveChatWidget.prototype.bindEventsOnInitFormillaChatShowChatWindow =
    function () {
      Formilla.bindFormillaOnEnterKeyChatEmail(),
        Formilla.bindFormillaEmailEvents();
    }),
  (FormillaBaseLiveChatWidget.prototype.onInitFormillaChatShowChatWindowAddMobileOverlayStyle =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.bindEventsOnInitCollectInputs =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onPreAutoInitFormillaChat =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onAutoInitFormillaChat = function () {
    Formilla.isChatShown ||
      (Formilla.customerEmail
        ? ((Formilla.emailTextbox.value = Formilla.customerEmail),
          Formilla.SetFieldAsReadOnly(Formilla.emailTextbox))
        : null != Formilla.contactData &&
          Formilla.contactData.Email &&
          ((Formilla.emailTextbox.value = Formilla.contactData.Email),
          Formilla.contactData.IsContact &&
            Formilla.SetFieldAsReadOnly(Formilla.emailTextbox)),
      Formilla.emailTextbox.value &&
        Formilla.spanEmailTextbox &&
        (Formilla.spanEmailTextbox.innerHTML = "")),
      ((Formilla.customerEmail && "" != Formilla.customerEmail.trim()) ||
        null != Formilla.contactData) &&
        Formilla.isEmailRequiredToChat &&
        (Formilla.customerEmail &&
          (Formilla.chatEmailTextbox.value = Formilla.customerEmail.trim()),
        Formilla.chatEmailTextbox.value
          ? Formilla.SetFieldAsReadOnly(Formilla.chatEmailTextbox)
          : !Formilla.chatEmailTextbox.value &&
            null != Formilla.contactData &&
            Formilla.contactData.Email &&
            ((Formilla.chatEmailTextbox.value = Formilla.contactData.Email),
            Formilla.contactData.IsContact &&
              Formilla.SetFieldAsReadOnly(Formilla.chatEmailTextbox)),
        Formilla.chatEmailTextbox.value &&
          (Formilla.spanChatEmailTextbox.innerHTML = ""));
  }),
  (FormillaBaseLiveChatWidget.prototype.onShowLiveChatBtn = function () {
    (Formilla.chatButton.style.visibility = "hidden"),
      Formilla.FormillaShowElement(Formilla.chatButton);
  }),
  (FormillaBaseLiveChatWidget.prototype.onHideLiveChatBtn = function () {
    Formilla.FormillaHideElement(Formilla.chatButton);
  }),
  (FormillaBaseLiveChatWidget.prototype.onInitProactiveFormillaChat =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onFormillaProcessAgentRequestedChat =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onFormillaTriggerProactiveChatMessage =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onGetMessagesCallbackChatEnded =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.showHeaderIcon = function () {}),
  (FormillaBaseLiveChatWidget.prototype.getNewMessageHtmlContainer =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.showAgentIsTypingMessage =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.getMessageHtml = function () {}),
  (FormillaBaseLiveChatWidget.prototype.getMessageContainerForFormillaShowMessageToUser =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onFormillaMinimizeChatWindow =
    function () {
      Formilla.isChatShown
        ? Formilla.ShowFormillaChatBox()
        : Formilla.ShowFormillaEmailBox(),
        Formilla.resetFormillaEmailFields();
    }),
  (FormillaBaseLiveChatWidget.prototype.onFormillaRenderAgentPic = function (
    JSONData
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.hideSendChatMessageContainer =
    function (hideSendChatMessage) {}),
  (FormillaBaseLiveChatWidget.prototype.addChatBotInfoToSendChatMessage =
    function (JSONData) {}),
  (FormillaBaseLiveChatWidget.prototype.removeChatBotInfoFromSendChatMessage =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.getScriptDependencies = function () {
    return "";
  }),
  (FormillaBaseLiveChatWidget.prototype.getWidgetExtraContainerWidth =
    function () {
      return 0;
    }),
  (FormillaBaseLiveChatWidget.prototype.resetChatWidgetPosition = function (
    element
  ) {
    ("bottom-left" != Formilla.buttonLocation &&
      "middle-left" != Formilla.buttonLocation) ||
      element.style.setProperty(
        "margin-right",
        this.getWidgetExtraContainerWidth() + "px",
        "important"
      );
  }),
  (FormillaBaseLiveChatWidget.prototype.hasMessageStatusFeature = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.markLastMessageAsSent = function (
    sendText
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.getSentStatusElement = function () {
    return "";
  }),
  (FormillaBaseLiveChatWidget.prototype.removeLastSentStatusElement =
    function () {
      var sentContainer = document.getElementById(this.SentStatusContainerId);
      sentContainer && sentContainer.parentNode.removeChild(sentContainer);
    }),
  (FormillaBaseLiveChatWidget.prototype.markLastMessageAsRead = function (
    readText,
    lastAgentViewedTimestamp,
    bDisableAnimation
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.getReadStatusElement = function () {
    return "";
  }),
  (FormillaBaseLiveChatWidget.prototype.removeLastReadStatusElement =
    function () {
      var readContainer = document.getElementById(this.ReadStatusContainerId);
      readContainer && readContainer.parentNode.removeChild(readContainer);
    }),
  (FormillaBaseLiveChatWidget.prototype.updateLastVisitorViewedTimestamp =
    function (wasProactiveOrRequestChat, unixTimeStamp) {
      if (
        null != Formilla.cookieService.getCookieValue("formillaChatSession") &&
        "yes" != Formilla.cookieService.getCookieValue("formillaIsMinimized")
      )
        if (wasProactiveOrRequestChat)
          (Formilla.lastVisitorViewedTimestamp = unixTimeStamp),
            Formilla.UpdateLastVisitorViewedTimestamp();
        else {
          var agentMessages = document.getElementsByClassName(
            this.AgentMessageContainerClass
          );
          if (agentMessages && 0 < agentMessages.length) {
            var lastAgentMessage = agentMessages[agentMessages.length - 1],
              sentDateTimeStamp = parseInt(
                lastAgentMessage.getAttribute("data-sent-timestamp")
              );
            sentDateTimeStamp > Formilla.lastVisitorViewedTimestamp &&
              ((Formilla.lastVisitorViewedTimestamp = sentDateTimeStamp),
              Formilla.UpdateLastVisitorViewedTimestamp());
          }
        }
    }),
  (FormillaBaseLiveChatWidget.prototype.onFormillaSendMessageCallback =
    function (jsonData) {
      (Formilla.chatEmailTextbox.style.display = "none"),
        Formilla.FormillaHideElement(Formilla.startMessageContainer),
        Formilla.FormillaHideElement(Formilla.chatEmailTextboxContainer),
        Formilla.FormillaHideElement(Formilla.popupFooterBottom);
    }),
  (FormillaBaseLiveChatWidget.prototype.hideElementById = function (id) {
    var element = document.getElementById(id);
    element && (element.style.display = "none");
  }),
  (FormillaBaseLiveChatWidget.prototype.showElementById = function (id) {
    var element = document.getElementById(id);
    element && (element.style.display = "block");
  }),
  (FormillaBaseLiveChatWidget.prototype.formatChatMessage = function (
    messageText,
    bHideLabel,
    bReturnAsNodeObject,
    messageSentDate,
    isEmailRequestConversion
  ) {
    var userChatMessageTextColor = "",
      userChatMessageBackgroundColor = "",
      message = "";
    if (
      ("color:" + Formilla.chatPopupTextColor + ";",
      (userNameSeparatorColor =
        "background-color:" + Formilla.chatPopupTextColor + ";"),
      Formilla.isChatMessageStyleInline &&
        ((userChatMessageTextColor =
          "color:" + Formilla.userChatMessageTextColor + ";"),
        (userChatMessageBackgroundColor =
          "background-color:" + Formilla.userChatMessageBackgroundColor + ";"),
        "fill:" + Formilla.userChatMessageBackgroundColor + ";"),
      (message =
        '<div class="formillaUserMessageCtr" style="' +
        userChatMessageTextColor +
        "float:left; clear:both; display: inline; border-radius: 4px; margin-bottom: 7px; padding: 5px;" +
        userChatMessageBackgroundColor +
        '">'),
      bHideLabel ||
        (message +=
          '<span class="formillaUserNameCtr" style="' +
          userChatMessageTextColor +
          'font-weight: bold;">' +
          Formilla.userChatMessageLabel +
          ": </span>"),
      (message += messageText + "</div>"),
      bReturnAsNodeObject)
    ) {
      var newMessage = document.createElement("div");
      (newMessage.innerHTML = message), (message = newMessage.firstChild);
    }
    return message;
  }),
  (FormillaBaseLiveChatWidget.prototype.onRender = function () {}),
  (FormillaBaseLiveChatWidget.prototype.getStylesDependencies = function (
    domain
  ) {
    return "";
  }),
  (FormillaBaseLiveChatWidget.prototype.adjustChatContainerScroll =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.addNewMessage = function (
    messageText,
    bHideLabel,
    bReturnAsNodeObject,
    messageSentDate
  ) {
    Formilla.chatMessagesContainer.appendChild(
      this.formatChatMessage(
        messageText,
        bHideLabel,
        bReturnAsNodeObject,
        messageSentDate
      )
    );
  }),
  (FormillaBaseLiveChatWidget.prototype.addNewAgentMessages = function (
    chatMessages,
    cmId,
    isAgentBot
  ) {
    var newMessage;
    (newMessage =
      "3" == Formilla.widgetVersion
        ? document.createElement("ul")
        : document.createElement("li")).innerHTML =
      Formilla.FormillaLinkify(chatMessages);
    for (
      newMessage.childNodes.length;
      0 < newMessage.childNodes.length;
      newMessage.childNodes.length - 1
    )
      Formilla.chatMessagesContainer.appendChild(newMessage.childNodes[0]);
  }),
  (FormillaBaseLiveChatWidget.prototype.processChatBotResponse = function (
    hasChatBotResponded,
    JSONData
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.removeActionButtons = function () {}),
  (FormillaBaseLiveChatWidget.prototype.clearLastMessageStyle = function () {}),
  (FormillaBaseLiveChatWidget.prototype.hasMessageAgentPictureFeature =
    function () {
      return !1;
    }),
  (FormillaBaseLiveChatWidget.prototype.showAgentIsTyping = function (
    agentName,
    agentPic
  ) {
    (Formilla.agentIsTypingMessage.innerHTML = agentName + " typing..."),
      (Formilla.agentIsTypingMessage.style.display = "inline");
  }),
  (FormillaBaseLiveChatWidget.prototype.addCssStylesOnParent = function (data) {
    Formilla.addCssStylesOnParent(data.LiveChatCSS);
  }),
  (FormillaBaseLiveChatWidget.prototype.processMediaQueries = function () {}),
  (FormillaBaseLiveChatWidget.prototype.updateTextAreaHeight = function () {}),
  (FormillaBaseLiveChatWidget.prototype.disableChatInput = function () {
    Formilla.chatTextbox.disabled = !0;
  }),
  (FormillaBaseLiveChatWidget.prototype.isChatInputDisabled = function () {
    return Formilla.chatTextbox.disabled;
  }),
  (FormillaBaseLiveChatWidget.prototype.enableChatInput = function () {
    Formilla.chatTextbox.disabled = !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.onWindowResize = function () {}),
  (FormillaBaseLiveChatWidget.prototype.hasMobileStyles = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.hideOrCloseChatWindow = function () {
    (Formilla.isMobile.ipad() || Formilla.isMobile.iOS()) &&
      ((window.parent.document.getElementById("formilla-frame").style.position =
        "absolute"),
      setTimeout(function () {
        window.parent.document.getElementById("formilla-frame").style.position =
          "fixed";
      }, 100));
  }),
  (FormillaBaseLiveChatWidget.prototype.renderPreChatFieldsForSmartMessage =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.validatePrechatFields = function (
    inputs
  ) {
    for (var result = !0, i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      Formilla.validatePrechatField(input)
        ? this.setPreChatFieldValidationState(input, !0)
        : (this.setPreChatFieldValidationState(input, !1), (result = !1));
    }
    return result;
  }),
  (FormillaBaseLiveChatWidget.prototype.setPreChatFieldValidationState =
    function (input, isValid) {}),
  (FormillaBaseLiveChatWidget.prototype.clearPrechatValidations = function (
    inputs
  ) {
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      this.setPreChatFieldValidationState(input, !0);
    }
  }),
  (FormillaBaseLiveChatWidget.prototype.bindPreChatFieldsEvents = function (
    inputs
  ) {
    for (var i = 0; i < inputs.length; i++)
      this.bindPreChatFieldEvents(inputs[i]);
  }),
  (FormillaBaseLiveChatWidget.prototype.bindPreChatFieldEvents = function (
    input
  ) {
    var type = input.getAttribute("data-field-type"),
      _this = this;
    (input.onkeyup = function (e) {
      9 != e.keyCode &&
        (Formilla.validatePrechatField(input)
          ? (_this.setPreChatFieldValidationState(input, !0),
            "Email" == type && (Formilla.chatEmailTextboxValidator = !0))
          : ("Email" != type ||
              ("Email" == type && Formilla.chatEmailTextboxValidator)) &&
            _this.setPreChatFieldValidationState(input, !1));
    }),
      (input.onblur = function () {
        Formilla.validatePrechatField(input)
          ? _this.setPreChatFieldValidationState(input, !0)
          : _this.setPreChatFieldValidationState(input, !1);
      }),
      (input.onkeydown = function (event) {
        return Formilla.handleOnEnterKeyChatEmail(this, event);
      });
  }),
  (FormillaBaseLiveChatWidget.prototype.prepopulatePrechatFields = function (
    inputs
  ) {
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i],
        type = input.getAttribute("data-field-type");
      type == PreChatFieldType.Email &&
        (null != Formilla.customerEmail &&
          (input.value = Formilla.customerEmail),
        input.value
          ? Formilla.SetFieldAsReadOnly(input)
          : !input.value &&
            null != Formilla.contactData &&
            Formilla.contactData.Email &&
            ((input.value = Formilla.contactData.Email),
            Formilla.contactData.IsContact &&
              Formilla.SetFieldAsReadOnly(input))),
        type == PreChatFieldType.FirstName &&
          (null != Formilla.customerFirstName &&
            (input.value = Formilla.customerFirstName),
          input.value
            ? Formilla.SetFieldAsReadOnly(input)
            : !input.value &&
              null != Formilla.contactData &&
              Formilla.contactData.FirstName &&
              ((input.value = Formilla.contactData.FirstName),
              Formilla.contactData.IsContact &&
                Formilla.SetFieldAsReadOnly(input))),
        type == PreChatFieldType.LastName &&
          (null != Formilla.customerLastName &&
            (input.value = Formilla.customerLastName),
          input.value
            ? Formilla.SetFieldAsReadOnly(input)
            : !input.value &&
              null != Formilla.contactData &&
              Formilla.contactData.LastName &&
              ((input.value = Formilla.contactData.LastName),
              Formilla.contactData.IsContact &&
                Formilla.SetFieldAsReadOnly(input))),
        type == PreChatFieldType.Phone &&
          (null != Formilla.customerPhone &&
            (input.value = Formilla.customerPhone),
          input.value
            ? Formilla.SetFieldAsReadOnly(input)
            : !input.value &&
              null != Formilla.contactData &&
              Formilla.contactData.Phone &&
              ((input.value = Formilla.contactData.Phone),
              Formilla.contactData.IsContact &&
                Formilla.SetFieldAsReadOnly(input))),
        type == PreChatFieldType.Custom1 &&
          (null != Formilla.customField1 &&
            (input.value = Formilla.customField1),
          !input.value &&
            null != Formilla.contactData &&
            Formilla.contactData.CustomField1 &&
            (input.value = Formilla.contactData.CustomField1)),
        type == PreChatFieldType.Custom2 &&
          (null != Formilla.customField2 &&
            (input.value = Formilla.customField2),
          !input.value &&
            null != Formilla.contactData &&
            Formilla.contactData.CustomField2 &&
            (input.value = Formilla.contactData.CustomField2)),
        type == PreChatFieldType.Custom3 &&
          (null != Formilla.customField3 &&
            (input.value = Formilla.customField3),
          !input.value &&
            null != Formilla.contactData &&
            Formilla.contactData.CustomField3 &&
            (input.value = Formilla.contactData.CustomField3));
    }
  }),
  (FormillaBaseLiveChatWidget.prototype.getPrechatFormValues = function (
    inputs
  ) {
    for (var values = {}, i = 0; i < inputs.length; i++) {
      var input = inputs[i],
        type = input.getAttribute("data-field-type"),
        inputValue =
          ("select-one" == input.type && 0 < input.selectedIndex) ||
          "text" == input.type ||
          "textarea" == input.type
            ? input.value
            : "";
      values[type] = inputValue;
    }
    return values;
  }),
  (FormillaBaseLiveChatWidget.prototype.validateCollectInputs = function (
    inputs
  ) {
    for (var result = !0, i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      Formilla.validateCollectInput(input)
        ? this.setCollectInputValidationState(input, !0)
        : (this.setCollectInputValidationState(input, !1), (result = !1));
    }
    return result;
  }),
  (FormillaBaseLiveChatWidget.prototype.setCollectInputValidationState =
    function (input, isValid) {}),
  (FormillaBaseLiveChatWidget.prototype.bindCollectInputsEvents = function (
    inputs
  ) {
    for (var i = 0; i < inputs.length; i++)
      this.bindCollectInputEvents(inputs[i]);
  }),
  (FormillaBaseLiveChatWidget.prototype.bindCollectInputEvents = function (
    input
  ) {
    var _this = this;
    (input.onkeyup = function (e) {
      9 != e.keyCode &&
        (Formilla.validateCollectInput(input)
          ? _this.setCollectInputValidationState(input, !0)
          : _this.setCollectInputValidationState(input, !1));
    }),
      (input.onblur = function () {
        Formilla.validateCollectInput(input)
          ? _this.setCollectInputValidationState(input, !0)
          : _this.setCollectInputValidationState(input, !1);
      }),
      null != input.attributes["data-post-actions"] &&
        "True" == input.attributes["data-post-actions"].value &&
        (input.onkeydown = function (event) {
          if (13 == event.keyCode) {
            var submitbutton = input.parentElement.querySelector(".submit");
            null != submitbutton &&
              null != submitbutton &&
              Formilla.HandleCollectInputsClick(event, submitbutton);
          }
        });
  }),
  (FormillaBaseLiveChatWidget.prototype.startChatWithValidMessageField =
    function (message) {
      return this.validateMessageField(message);
    }),
  (FormillaBaseLiveChatWidget.prototype.validateMessageField = function (
    message
  ) {
    return "" != message.trim();
  }),
  (FormillaBaseLiveChatWidget.prototype.getChatBotAction = function (obj) {}),
  (FormillaBaseLiveChatWidget.prototype.getCollectInputFields = function (
    isAllInputs
  ) {
    return null;
  }),
  (FormillaBaseLiveChatWidget.prototype.getWixIframeSize = function (
    isChatVisible,
    isAttnGrabberVisible
  ) {
    var result = { height: 0, width: 340 };
    return (
      isChatVisible
        ? (result.height = 450)
        : isAttnGrabberVisible
        ? (result.height = 300)
        : ((result.height = 50), (result.width = 350)),
      result
    );
  }),
  (FormillaBaseLiveChatWidget.prototype.handleWixEditorDisplay = function () {
    var divFormillaChat = document.getElementById("divFormillaChat"),
      divSetupWarning = document.getElementById("divSetupWarning"),
      iframe = window.parent.document.getElementById("formilla-frame");
    Formilla.isBottomLeftLocation
      ? (iframe.style.setProperty("left", "15px", "important"),
        divFormillaChat && (divFormillaChat.style.left = "0px"))
      : (iframe.style.setProperty("right", "15px", "important"),
        divFormillaChat && (divFormillaChat.style.right = "0px")),
      divFormillaChat &&
        ((divFormillaChat.style.visibility = "hidden"),
        (divFormillaChat.style.bottom = "40px"),
        (divFormillaChat.style.top = "auto")),
      divSetupWarning && (divSetupWarning.style.display = "none"),
      Formilla.chatButton &&
        ((Formilla.chatButton.style.visibility = "hidden"),
        Formilla.isBottomLeftLocation
          ? (Formilla.chatButton.style.left = "60px")
          : (Formilla.chatButton.style.right = "60px"));
    var size = Formilla.liveChatWidgetInstance.getWixIframeSize(!0, !0);
    parent.Wix.resizeWindow(size.width, size.height);
  }),
  (FormillaBaseLiveChatWidget.prototype.showChatButtonOnWixEditor =
    function () {
      return !0;
    }),
  (FormillaBaseLiveChatWidget.prototype.handleWixPreviewDisplay = function () {
    var divFormillaChat = document.getElementById("divFormillaChat");
    divFormillaChat &&
      ((divFormillaChat.style.display = "none"),
      (divFormillaChat.style.bottom = "0px"),
      (divFormillaChat.style.right = "0px"),
      (divFormillaChat.style.top = "")),
      Formilla.chatButton &&
        (Formilla.chatButton.style.setProperty("right", "auto", "important"),
        Formilla.chatButton.style.setProperty("left", "auto", "important"));
  }),
  (FormillaBaseLiveChatWidget.prototype.onWixStylesChange = function () {}),
  (FormillaBaseLiveChatWidget.prototype.bindRequireEmailAddressEvents =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.onRequireEmailAddressSubmit =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.hasSnippetFeature = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.showSnippet = function (
    message,
    agentPic,
    messageCount,
    isAutoMessage,
    isChatRequest
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.hideSnippet = function () {}),
  (FormillaBaseLiveChatWidget.prototype.hasAnimations = function () {
    return !1;
  }),
  (FormillaBaseLiveChatWidget.prototype.showWidgetAnimation = function () {}),
  (FormillaBaseLiveChatWidget.prototype.closeWidgetAnimation = function () {}),
  (FormillaBaseLiveChatWidget.prototype.addStandardQueueMessages = function (
    chatMessages,
    queueNumber
  ) {
    Formilla.chatMessagesContainer.innerHTML =
      Formilla.FormillaLinkify(chatMessages);
  }),
  (FormillaBaseLiveChatWidget.prototype.getChatWidgetLocationClass =
    function () {
      return "divFormillaChat";
    }),
  (FormillaBaseLiveChatWidget.prototype.getChatButtonLocationClass =
    function () {
      return "formilla-chat-button-inner";
    }),
  (FormillaBaseLiveChatWidget.prototype.bindMessageTextAreaEvents =
    function () {}),
  (FormillaBaseLiveChatWidget.prototype.getChatWidgetMinHeight = function () {
    return "0px";
  }),
  (FormillaBaseLiveChatWidget.prototype.getInitialIframeWidth = function () {
    return "380px";
  }),
  (FormillaBaseLiveChatWidget.prototype.useFullWixHeight = function () {
    return Formilla.isWix;
  }),
  (FormillaBaseLiveChatWidget.prototype.checkWixMaxHeight = function (height) {
    return height;
  }),
  (FormillaBaseLiveChatWidget.prototype.hasAttentionGrabberFeature =
    function () {
      return !0;
    }),
  (FormillaBaseLiveChatWidget.prototype.hasFileAttachmentsFeature =
    function () {
      return !1;
    }),
  (FormillaBaseLiveChatWidget.prototype.initCalendlyApp = function (
    element
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.loadCalendlyApp = function (
    element
  ) {}),
  (FormillaBaseLiveChatWidget.prototype.unloadCalendlyApp = function () {}),
  (FormillaLiveChatWidgetV1.prototype = Object.create(
    FormillaBaseLiveChatWidget.prototype
  )),
  ((FormillaLiveChatWidgetV1.prototype.constructor =
    FormillaLiveChatWidgetV1).prototype.resetChatWidgetPosition = function (
    element
  ) {}),
  (FormillaLiveChatWidgetV1.prototype.showAgentIsTyping = function (
    agentName,
    agentPic
  ) {
    (Formilla.agentIsTypingMessage.innerHTML =
      agentName + " is typing a message..."),
      (Formilla.agentIsTypingMessage.style.display = "inline");
  }),
  (FormillaLiveChatWidgetV2.prototype = Object.create(
    FormillaBaseLiveChatWidget.prototype
  )),
  ((FormillaLiveChatWidgetV2.prototype.constructor =
    FormillaLiveChatWidgetV2).prototype.getWidgetExtraContainerWidth = function () {
    return Formilla.isMobile.any() ? 0 : 5;
  }),
  (FormillaLiveChatWidgetV2.prototype.hasMobileStyles = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV3.prototype = Object.create(
    FormillaBaseLiveChatWidget.prototype
  )),
  ((FormillaLiveChatWidgetV3.prototype.constructor =
    FormillaLiveChatWidgetV3).prototype.hasProactivePopup = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV3.prototype.bindEventsOnInitFormillaChatShowChatWindow =
    function () {
      var inputs = document
        .getElementById("formillaTextContainer")
        .getElementsByClassName("formillaPrechatInput");
      FormillaBaseLiveChatWidget.prototype.bindPreChatFieldsEvents.call(
        this,
        inputs
      ),
        Formilla.bindOfflineFormFields(),
        FormillaBaseLiveChatWidget.prototype.prepopulatePrechatFields.call(
          this,
          inputs
        );
    }),
  (FormillaLiveChatWidgetV3.prototype.onAutoInitFormillaChat = function () {
    Formilla.customerEmail &&
      "" != Formilla.customerEmail.trim() &&
      Formilla.setPrechatEmail(Formilla.customerEmail.trim()),
      FormillaBaseLiveChatWidget.prototype.onAutoInitFormillaChat.call(this);
  }),
  (FormillaLiveChatWidgetV3.prototype.onChatSessionEnded = function () {
    (Formilla.startChat = 1),
      (Formilla.isRestartChat = !0),
      (Formilla.chatTextbox.value = ""),
      this.enableChatInput();
  }),
  (FormillaLiveChatWidgetV3.prototype.hasPrechat = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV3.prototype.onInitFormillaChatFields = function () {
    Formilla.isEmailRequiredToChat
      ? (Formilla.chatEmailTextbox = document.querySelector(
          "#formillaTextContainer .formillaPrechatInput[data-field-type='Email']"
        ))
      : (Formilla.chatEmailTextbox = document
          .getElementById("formillaTextContainer")
          .getElementsByClassName("formillaPrechatInput")[0]),
      (Formilla.chatEmailTextboxContainer = document.getElementById(
        "formillaPrechatContainer"
      ));
  }),
  (FormillaLiveChatWidgetV3.prototype.onHideLiveChatBtn = function () {
    FormillaBaseLiveChatWidget.prototype.onHideLiveChatBtn.call(this),
      Formilla.FormillaHideElement(Formilla.chatButton);
  }),
  (FormillaLiveChatWidgetV3.prototype.onFormillaMinimizeChatWindow =
    function () {}),
  (FormillaLiveChatWidgetV3.prototype.getWidgetExtraContainerWidth =
    function () {
      return Formilla.isMobile.any() ? 0 : 5;
    }),
  (FormillaLiveChatWidgetV3.prototype.onFormillaRenderAgentPic = function (
    JSONData
  ) {
    if (JSONData.AgentPic) {
      Formilla.headerIcon.style.display = "none";
      var src =
        Formilla.formillaProtocol() +
        Formilla.formillaDomain +
        JSONData.AgentPic;
      (Formilla.headerAgentPicture.src = src),
        (Formilla.headerAgentPicture.style.display = "inline-block"),
        (Formilla.headerAgentPicture.style.height = "50px");
    } else Formilla.headerIcon.className = "formilla-i-h-user formilla-drag";
  }),
  (FormillaLiveChatWidgetV3.prototype.showAgentIsTyping = function (
    agentName,
    agentPic
  ) {}),
  (FormillaLiveChatWidgetV3.prototype.formatChatMessage = function (
    messageText,
    bHideLabel,
    bReturnAsNodeObject,
    messageSentDate,
    isEmailRequestConversion
  ) {
    var userNameColor,
      userChatMessageTextColor = "",
      userChatMessageBackgroundColor = "",
      userChatMessageFillColor = "",
      message = "",
      leftBubble = "";
    if (
      ((userNameColor = "color:" + Formilla.chatPopupTextColor + ";"),
      (userNameSeparatorColor =
        "background-color:" + Formilla.chatPopupTextColor + ";"),
      Formilla.isChatMessageStyleInline &&
        ((userChatMessageTextColor =
          "color:" + Formilla.userChatMessageTextColor + ";"),
        (userChatMessageBackgroundColor =
          "background-color:" + Formilla.userChatMessageBackgroundColor + ";"),
        (userChatMessageFillColor =
          "fill:" + Formilla.userChatMessageBackgroundColor + ";")),
      bHideLabel)
    ) {
      if (
        ((message =
          "<li style='text-align: center !important;'><div style='display: inline-block !important;'>" +
          messageText +
          "</div></li>"),
        bReturnAsNodeObject)
      )
        ((newMessage = document.createElement("ul")).innerHTML = message),
          (message = newMessage.firstChild);
    } else {
      (leftBubble = "<span>"),
        (leftBubble +=
          "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 48 35' style='enable-background:new 0 0 48 35;' xml:space='preserve'>"),
        (leftBubble +=
          "<path style='fill-rule:evenodd;clip-rule:evenodd;" +
          userChatMessageFillColor +
          "'d='M167.5,0c0,11.666,0,23.334,0,35c-51.995,0-104.005,0-156,0c0.723-4.181,2.11-15.655-4.471-26.647C4.884,4.769,2.388,2.065,0.167,0.083C55.944,0.056,111.722,0.028,167.5,0z'></path>"),
        (leftBubble +=
          "<path style='fill-rule:evenodd;clip-rule:evenodd;" +
          userChatMessageFillColor +
          "' d='M2.583,15.917'></path>"),
        (leftBubble += "</svg>"),
        (leftBubble += "</span>");
      var newMessage,
        sentUtcDate = Formilla.convertDateToUTC(new Date()),
        date = Formilla.getFormillaTimeFromUtcDate(sentUtcDate);
      if (
        ((message = "<li class='left_msg'>"),
        (message +=
          "<span class='formilladg_title formillaUserMessageCtr' style='" +
          userNameColor +
          "' >"),
        (message +=
          "<span class='formilladg_title_h formillaUserNameCtr' style='" +
          userNameColor +
          "'>" +
          Formilla.userChatMessageLabel +
          "</span>"),
        (message +=
          "<span class='formilladg_circle' style='" +
          userNameSeparatorColor +
          "'></span>"),
        (message += date),
        (message += "</span>"),
        (message +=
          "<span class='fdgc_msg_2' style='" +
          userChatMessageBackgroundColor +
          "'>"),
        (message += leftBubble),
        (message += "<article style='" + userChatMessageTextColor + "'>"),
        (message += messageText),
        (message += "</article>"),
        (message += "</span>"),
        (message += "</li>"),
        bReturnAsNodeObject)
      )
        ((newMessage = document.createElement("ul")).innerHTML = message),
          (message = newMessage.firstChild);
    }
    return message;
  }),
  (FormillaLiveChatWidgetV3.prototype.hasMobileStyles = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV3.prototype.startChatWithValidMessageField =
    function (message) {
      return !0;
    }),
  (FormillaLiveChatWidgetV3.prototype.validatePrechatFields = function (
    message
  ) {
    if (Formilla.isProactive || Formilla.isRequestChat)
      return this.validateMessageField(message);
    var inputs = document
      .getElementById("formillaTextContainer")
      .getElementsByClassName("formillaPrechatInput");
    return FormillaBaseLiveChatWidget.prototype.validatePrechatFields.call(
      this,
      inputs
    );
  }),
  (FormillaLiveChatWidgetV3.prototype.setPreChatFieldValidationState =
    function (input, isValid) {
      input.parentElement.className = isValid
        ? "formillaFocus"
        : "formillaError";
    }),
  (FormillaLiveChatWidgetV3.prototype.clearPrechatValidations = function () {
    var inputs = document
      .getElementById("formillaTextContainer")
      .getElementsByClassName("formillaPrechatInput");
    return FormillaBaseLiveChatWidget.prototype.clearPrechatValidations.call(
      this,
      inputs
    );
  }),
  (FormillaLiveChatWidgetV3.prototype.getPrechatFormValues = function () {
    var inputs = document
      .getElementById("formillaTextContainer")
      .getElementsByClassName("formillaPrechatInput");
    return FormillaBaseLiveChatWidget.prototype.getPrechatFormValues.call(
      this,
      inputs
    );
  }),
  (FormillaLiveChatWidgetV4.prototype = Object.create(
    FormillaBaseLiveChatWidget.prototype
  )),
  ((FormillaLiveChatWidgetV4.prototype.constructor =
    FormillaLiveChatWidgetV4).prototype.hideElementById = function (id) {
    $("#" + id).hide();
  }),
  (FormillaLiveChatWidgetV4.prototype.showElementById = function (id) {
    $("#" + id).show();
  }),
  (FormillaLiveChatWidgetV4.prototype.hasMessageStatusFeature = function () {
    return !1;
  }),
  (FormillaLiveChatWidgetV4.prototype.bindEventsOnInitFormillaChatShowChatWindow =
    function () {
      var inputs = $("#" + this.PreChatContainer).find(".formillaPrechatInput");
      FormillaBaseLiveChatWidget.prototype.bindPreChatFieldsEvents.call(
        this,
        inputs
      ),
        FormillaBaseLiveChatWidget.prototype.prepopulatePrechatFields.call(
          this,
          inputs
        ),
        this.bindMessageTextAreaEvents(),
        this.bindRequireEmailAddressEvents();
    }),
  (FormillaLiveChatWidgetV4.prototype.bindEventsOnInitCollectInputs =
    function () {
      var inputs = $(Formilla.chatMessagesContainer)
        .find(".ch-receive-collectinput")
        .last()
        .find("input");
      null != inputs &&
        null != inputs &&
        0 < inputs.length &&
        FormillaBaseLiveChatWidget.prototype.bindCollectInputsEvents.call(
          this,
          inputs
        );
    }),
  (FormillaLiveChatWidgetV4.prototype.onPreAutoInitFormillaChat = function (
    isChatAlreadyVisible
  ) {
    var _this = this;
    setTimeout(function () {
      _this.isScrollGreaterThanBio()
        ? $("#" + _this.ChatHeaderAgentBioContainerId).hide()
        : $("#" + _this.ChatHeaderAgentBioContainerId).text() &&
          $("#" + _this.ChatHeaderAgentBioContainerId).show();
    }, 120),
      isChatAlreadyVisible ||
        $("#" + this.ChatMessagesScrollContainer).css("visibility", "hidden");
  }),
  (FormillaLiveChatWidgetV4.prototype.onAutoInitFormillaChat = function () {
    Formilla.isMobile.any() && this._setParentViewport(!0);
  }),
  (FormillaLiveChatWidgetV4.prototype.onChatSessionEnded = function (
    chatSessionId
  ) {
    (Formilla.startChat = 1),
      (Formilla.isRestartChat = !0),
      Formilla.FormillaHideElement(Formilla.agentIsTypingMessage),
      Formilla.fileAttachmentControl.clearChatSessionUnsentData(
        chatSessionId,
        !0
      ),
      Formilla.fileAttachmentControl.disableFileAttachments(),
      this.removeChatBotInfoFromSendChatMessage(),
      this.removeActionButtons(),
      $(".ch-footerchatbox").removeClass("hasFilePreview");
  }),
  (FormillaLiveChatWidgetV4.prototype.hasPrechat = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.onInitFormillaChatFields = function () {
    (Formilla.chatEmailTextbox = document.getElementById("txtFormillaMessage")),
      (Formilla.chatEmailTextboxContainer = document.getElementById(
        this.PreChatContainer
      ));
  }),
  (FormillaLiveChatWidgetV4.prototype.onHideLiveChatBtn = function () {
    Formilla.FormillaHideElement(Formilla.chatButton),
      Formilla.isMobile.any()
        ? Formilla.FormillaHideElement(
            document.getElementById("formilla-chat-close-btn")
          )
        : Formilla.FormillaShowElement(
            document.getElementById("formilla-chat-close-btn")
          );
  }),
  (FormillaLiveChatWidgetV4.prototype.onFormillaMinimizeChatWindow =
    function () {
      Formilla.isProactive ||
        Formilla.cookieService.deleteCookie("formillaIsChatWindowOpen");
    }),
  (FormillaLiveChatWidgetV4.prototype.onFormillaRenderAgentPic = function (
    JSONData
  ) {
    var agentPic = JSONData.AgentPic,
      agentName = JSONData.AgentName,
      agentJobTitle = JSONData.AgentJobTitle,
      agentBio = JSONData.AgentBio;
    if (agentName && "" != agentName) {
      var imageContainer = document.getElementById(
          this.ChatHeaderAgentImageContainerId
        ),
        escapeAgentName = escape(agentName),
        attrs =
          "data-agentPic='" +
          agentPic +
          "' data-agentName='" +
          escapeAgentName +
          "' ";
      if (
        0 ==
          $(imageContainer).find("span[data-agentPic='" + agentPic + "']")
            .length &&
        0 ==
          $(imageContainer).find(
            "span[data-agentName='" + escapeAgentName + "']"
          ).length
      )
        if (agentPic) {
          var src =
            Formilla.formillaProtocol() + Formilla.formillaDomain + agentPic;
          imageContainer.innerHTML =
            "<span " +
            attrs +
            '><i class="ch-prof-img"><img src="' +
            src +
            '" alt="" style="width:68px;"></i></span>';
        } else
          imageContainer.innerHTML =
            "<span " +
            attrs +
            '><i class="ch-prof-img ch-name-chat-header">' +
            agentName.substr(0, 1) +
            "</i></span>";
      var mainChatContainer = document.getElementById(this.MainChatContainerId);
      $(mainChatContainer)
        .removeClass("ch-single-fields ch-double-fields")
        .addClass("ch-home"),
        (document.getElementById(
          this.ChatHeaderWelcomeMessageContainerId
        ).style.display = "none"),
        (document.getElementById(
          this.ChatHeaderTypicallyRespondsContainerId
        ).style.display = "none"),
        (document.getElementById(
          this.ChatHeaderPreChatContainerId
        ).style.display = "none");
      var agentNameContainer = document.getElementById(
        this.ChatHeaderAgentNameContainerId
      );
      (agentNameContainer.innerHTML = agentName),
        (agentNameContainer.style.display = "block");
      var agentJobTitleContainer = document.getElementById(
        this.ChatHeaderAgentTitleContainerId
      );
      (agentJobTitleContainer.innerHTML = agentJobTitle),
        (agentJobTitleContainer.style.display = agentJobTitle
          ? "block"
          : "none");
      var agentBioContainer = document.getElementById(
          this.ChatHeaderAgentBioContainerId
        ),
        wasBioEmpty = !agentBioContainer.innerHTML;
      agentBio
        ? (agentBioContainer.innerHTML = Formilla.FormillaLinkify(agentBio))
        : $(agentBioContainer).hide(),
        "" == agentBio ||
          !wasBioEmpty ||
          (this.hasScroll() && !this.isScrollAtTheTop()) ||
          $(agentBioContainer).slideDown(this.bioAnimationDelay),
        $("#" + this.ChatHeader).attr("data-isChatAssigned", "true");
    }
  }),
  (FormillaLiveChatWidgetV4.prototype.hideSendChatMessageContainer = function (
    hideSendChatMessage
  ) {
    null != hideSendChatMessage &&
      (hideSendChatMessage
        ? ($(".ch-footerchatbox").addClass("hidechatbox"),
          $(".ch-inner-wrapper").addClass("showfullchatcontainer"),
          this.removeChatBotInfoFromSendChatMessage())
        : ($(".ch-footerchatbox").removeClass("hidechatbox"),
          $(".ch-inner-wrapper").removeClass("showfullchatcontainer"),
          (Formilla.chatEmailTextbox.style.overflow = "hidden")));
  }),
  (FormillaLiveChatWidgetV4.prototype.addChatBotInfoToSendChatMessage =
    function (JSONData) {
      null != JSONData.ChatBotId &&
      null != JSONData.ChatBotId &&
      0 < JSONData.ChatBotId &&
      null != JSONData.ActiveActionId &&
      null != JSONData.ActiveActionId &&
      0 < JSONData.ActiveActionId
        ? (Formilla.sendButton.setAttribute(
            "data-chatbot-id",
            JSONData.ChatBotId
          ),
          Formilla.sendButton.setAttribute(
            "data-chatbot-type",
            JSONData.ChatBotType
          ),
          Formilla.sendButton.setAttribute(
            "data-action-id",
            JSONData.ActiveActionId
          ),
          Formilla.sendButton.setAttribute(
            "data-action-type",
            JSONData.ActiveActionType
          ))
        : this.removeChatBotInfoFromSendChatMessage();
    }),
  (FormillaLiveChatWidgetV4.prototype.removeChatBotInfoFromSendChatMessage =
    function () {
      Formilla.sendButton.removeAttribute("data-chatbot-id"),
        Formilla.sendButton.removeAttribute("data-chatbot-type"),
        Formilla.sendButton.removeAttribute("data-action-id"),
        Formilla.sendButton.removeAttribute("data-action-type");
    }),
  (FormillaLiveChatWidgetV4.prototype.getScriptDependencies = function (
    domain
  ) {
    var scripts = "";
    return (
      (scripts +=
        "<script type='text/javascript' src='" +
        domain +
        "remoteAssets/js/widgets/v4/jquery-3.6.0.min.js'></script>"),
      (scripts +=
        "<script type='text/javascript' src='" +
        domain +
        "remoteAssets/js/widgets/v4/jquery.mCustomScrollbar.concat.min.js'></script>"),
      (scripts +=
        "<script type='text/javascript' src='" +
        domain +
        "remoteAssets/js/widgets/v4/autosize.min.js'></script>"),
      (scripts +=
        "<script type='text/javascript' src='" +
        domain +
        "scripts/fileAttachments.js'></script>")
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getStylesDependencies = function (
    domain
  ) {
    var scripts = "";
    return (
      (scripts +=
        "\x3c!-- \n   * Font Awesome 5.0: http://fontawesome.com \n   * License: https://fontawesome.com/license (Icons: CC BY 4.0 License) \n   * No changes were made \n--\x3e"),
      (scripts +=
        "<link rel='stylesheet' type='text/css' href='" +
        domain +
        "remoteAssets/css/widgets/v4/jquery.mCustomScrollbar.min.css' media='screen'>")
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getWidgetExtraContainerWidth =
    function () {
      return Formilla.isMobile.any() ? 0 : 50;
    }),
  (FormillaLiveChatWidgetV4.prototype.resetChatWidgetPosition = function (
    element
  ) {
    var marginProperty =
      "bottom-right" == Formilla.buttonLocation
        ? "margin-right"
        : "margin-left";
    element.style.setProperty(
      marginProperty,
      this.getWidgetExtraContainerWidth() / 2 + "px",
      "important"
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.showAgentIsTyping = function (
    agentName,
    agentPic
  ) {
    var wasHidden = !$(Formilla.agentIsTypingMessage).is(":visible");
    (Formilla.agentIsTypingMessage.style.display = ""),
      this.setStyleForAgentIsTyping(),
      agentPic
        ? ($("#" + this.AgentIsTypingImgId).attr(
            "src",
            "//" + Formilla.formillaDomain + agentPic
          ),
          $("#" + this.AgentIsTypingImgId).css("width", "30px"),
          $("#" + this.AgentIsTypingImgId).show())
        : agentName &&
          ($("#" + this.AgentIsTypingInitialId).html(agentName.substr(0, 1)),
          $("#" + this.AgentIsTypingInitialId).show()),
      wasHidden &&
        this._isScrollAtTheBottom() &&
        ($(Formilla.agentIsTypingContainer).show(),
        this.adjustChatContainerScroll());
  }),
  (FormillaLiveChatWidgetV4.prototype._isScrollAtTheBottom = function () {
    var $scrollerOuter = $(".mCustomScrollbar"),
      $dragger = $scrollerOuter.find(".mCSB_dragger"),
      containerHeight = $scrollerOuter.find(".mCSB_draggerContainer").height(),
      scrollHeight = $dragger.height(),
      draggerTop = $dragger.position().top;
    return Math.floor(containerHeight - scrollHeight - draggerTop) <= 0;
  }),
  (FormillaLiveChatWidgetV4.prototype.isScrollAtTheTop = function () {
    return 0 == $(".mCSB_dragger").position().top;
  }),
  (FormillaLiveChatWidgetV4.prototype.setStyleForAgentIsTyping = function () {
    $(Formilla.chatMessagesContainer)
      .children()
      .last()
      .hasClass("ch-receive-chat")
      ? -1 ==
          Formilla.agentIsTypingMessage.className.indexOf(
            "agent-typing-container-near"
          ) &&
        (Formilla.agentIsTypingMessage.className +=
          " agent-typing-container-near")
      : (Formilla.agentIsTypingMessage.className =
          Formilla.agentIsTypingMessage.className.replace(
            " agent-typing-container-near",
            ""
          ));
  }),
  (FormillaLiveChatWidgetV4.prototype.onInitProactiveFormillaChat =
    function () {
      this.hideElementById(this.InitialStateHeader),
        this.hideElementById(this.ChatHeaderPreChatContainerId),
        this.showElementById(this.ChatHeader),
        this.showElementById(this.ChatHeaderChatSessionContainerId),
        this.showElementById(this.ChatMessagesContainer),
        this.showElementById(this.ChatStatePowerByContainerId);
      var mainChatContainer = document.getElementById(this.MainChatContainerId);
      -1 == mainChatContainer.className.indexOf("ch-inner") &&
        (mainChatContainer.className += " ch-inner"),
        $(mainChatContainer)
          .removeClass("ch-single-fields ch-double-fields")
          .addClass("ch-home"),
        $(".ch-header-home")
          .removeClass("ch-header-home")
          .addClass("ch-header-wrap"),
        $(".ch-inner-wrapper").addClass("IE9-correction");
    }),
  (FormillaLiveChatWidgetV4.prototype.onFormillaSendMessageCallback = function (
    jsonData
  ) {
    if (
      jsonData.IsStartChat &&
      Formilla.isRequireEmailAddressEnabled &&
      !Formilla.wasRequestEmailShown &&
      !Formilla.isCustomBotDisplayed
    ) {
      var _this = this;
      Formilla.customerEmail ||
        (null != Formilla.contactData && Formilla.contactData.Email) ||
        setTimeout(function () {
          _this.triggerRequestEmailFeature();
        }, 6e3);
    }
    this.hideElementById(this.PreChatContainer),
      this.hideElementById(this.InitialStateHeader),
      this.hideElementById(this.ChatHeaderPreChatContainerId),
      this.showElementById(this.ChatHeader),
      this.showElementById(this.ChatHeaderChatSessionContainerId),
      this.showElementById(this.ChatMessagesContainer),
      this.showElementById(this.ChatStatePowerByContainerId);
    var mainChatContainer = document.getElementById(this.MainChatContainerId);
    -1 == mainChatContainer.className.indexOf("ch-inner") &&
      (mainChatContainer.className += " ch-inner"),
      $(mainChatContainer)
        .removeClass("ch-single-fields ch-double-fields")
        .addClass("ch-home"),
      $(".ch-header-home")
        .removeClass("ch-header-home")
        .addClass("ch-header-wrap"),
      this.adjustChatContainerScroll(),
      $(".ch-inner-wrapper").addClass("IE9-correction");
  }),
  (FormillaLiveChatWidgetV4.prototype.triggerRequestEmailFeature = function () {
    var messageContainer = $("#" + this.ChatMessagesDivId),
      lastMessageCmId = messageContainer.children().last().attr("data-cmid");
    Formilla.wasRequestEmailShown = !0;
    var emailRequestHtml = $("." + this.RequestEmailAddressContainerId).clone(),
      emailInput = $(emailRequestHtml).find(
        "." + this.RequestEmailAddressInputId
      ),
      requestEmailBtn = $(emailRequestHtml).find(".requestEmailAddressBtn");
    this.bindRequireEmailAddressEvents(emailInput, requestEmailBtn),
      messageContainer.append(emailRequestHtml),
      messageContainer.find("." + this.RequestEmailAddressContainerId).show(),
      this.adjustChatContainerScroll();
  }),
  (FormillaLiveChatWidgetV4.prototype.formatChatMessage = function (
    messageText,
    bHideLabel,
    bReturnAsNodeObject,
    messageSentDate,
    createContainer,
    fileAttachments,
    isEmailRequestConversion
  ) {
    var message = "";
    if (bHideLabel) {
      if (
        ((message =
          "<li style='text-align: center !important;'><div style='display: inline-block !important;'>" +
          messageText +
          "</div></li>"),
        bReturnAsNodeObject)
      )
        ((newMessage = document.createElement("ul")).innerHTML = message),
          (message = newMessage.firstChild);
    } else {
      var hasFileAttachments =
          null != fileAttachments &&
          null != fileAttachments &&
          0 < fileAttachments.length,
        messageClass = createContainer
          ? "ch-chat-cont ch-theme-color"
          : "ch-box3 ch-theme-color",
        attrSentUnixTimeStamp = "",
        sentUtcDate = Formilla.convertDateToUTC(new Date()),
        innerMessage = "";
      if (messageSentDate)
        attrSentUnixTimeStamp =
          "data-sent-timestamp='" + messageSentDate.getTime() + "'";
      var newMessage,
        date = Formilla.getFormillaTimeFromUtcDate(sentUtcDate),
        userChatMessageTextColor =
          "color:" + Formilla.userChatMessageTextColor + ";",
        userChatMessageBackgroundColor =
          "background-color:" + Formilla.userChatMessageBackgroundColor + ";";
      if (hasFileAttachments)
        for (
          var fileAttachmentsHtml =
              Formilla.fileAttachmentControl.formatAttachmentThumbnails(
                fileAttachments
              ),
            i = 0;
          i < fileAttachmentsHtml.length;
          i++
        )
          (innerMessage +=
            "<div class='" +
            messageClass +
            " hasFileAttachments' " +
            attrSentUnixTimeStamp +
            "><small class='ch-chat-time formillaChatWidgetMessageTime'>" +
            date +
            "</small><p style='" +
            userChatMessageTextColor +
            "'>" +
            fileAttachmentsHtml[i] +
            "</p></div>"),
            (messageClass = "ch-box3 ch-theme-color");
      if (
        (isEmailRequestConversion &&
          (messageClass += " requestEmailConversion "),
        null != messageText &&
          "" != messageText &&
          (innerMessage +=
            "<div style='" +
            userChatMessageBackgroundColor +
            "' class='" +
            messageClass +
            "' " +
            attrSentUnixTimeStamp +
            "><small class='ch-chat-time formillaChatWidgetMessageTime'>" +
            date +
            "</small><p style='" +
            userChatMessageTextColor +
            "'>" +
            messageText +
            "</p>" +
            (isEmailRequestConversion ? "<i class='ch-icon-chk'></i>" : "") +
            "</div>"),
        createContainer
          ? (message +=
              "<div class='ch-send-chat clearfix'>" + innerMessage + "</div>")
          : (message = innerMessage),
        bReturnAsNodeObject)
      )
        ((newMessage = document.createElement("div")).innerHTML = message),
          (message = newMessage.firstChild);
    }
    return message;
  }),
  (FormillaLiveChatWidgetV4.prototype.formatBotActionMessage = function (
    messageText,
    actionId,
    messageGuid,
    messageSentDate
  ) {
    var parentElements = document.querySelectorAll(".ch-receive-action");
    if (
      null != parentElements &&
      null != parentElements &&
      0 < parentElements.length
    )
      for (var i = 0; i < parentElements.length; i++) {
        var elements = parentElements[i].querySelectorAll(
          'div[data-id="' + messageGuid + '"].actionButton'
        );
        if (null != elements && null != elements && 0 < elements.length) {
          var updateClass = parentElements[i].attributes.class.value.replace(
            "ch-receive-action",
            "ch-send-chat"
          );
          parentElements[i].attributes.class.value = updateClass;
          for (var j = 0; j < elements.length; j++) {
            var item = elements[j];
            null != item && item.getAttribute("data-action-id") == actionId
              ? (item.outerHTML = this.formatChatMessage(
                  Formilla.FormillaLinkify(
                    Formilla.HTMLEncode(
                      item.getAttribute("data-action-message")
                    )
                  ),
                  null,
                  null,
                  messageSentDate
                ))
              : (item.outerHTML = "");
          }
        }
      }
  }),
  (FormillaLiveChatWidgetV4.prototype.adjustChatContainerScroll = function (
    avoidAnimation
  ) {
    this._scrollMessageContainerDown(avoidAnimation);
  }),
  (FormillaLiveChatWidgetV4.prototype.updateTextAreaHeight = function () {
    autosize.update(document.querySelectorAll("textarea"));
  }),
  (FormillaLiveChatWidgetV4.prototype.onRender = function (fileAttachments) {
    if (
      (setTimeout(function () {
        autosize(document.querySelectorAll("textarea"));
      }, 100),
      0 < $("#" + this.ChatMessagesScrollContainer).length)
    ) {
      var _this = this,
        scrollbarCallbacks = { onInit: function () {} };
      Formilla.isMobile.any() ||
        ((scrollbarCallbacks.onScroll = function () {
          var scrollObj = this;
          clearTimeout(_this.AgentBioVisibilityInterval),
            (_this.AgentBioVisibilityInterval = setTimeout(function () {
              _this.setVisibilityOfAgentBio(scrollObj);
            }, 20));
        }),
        (scrollbarCallbacks.onOverflowYNone = function () {
          var scrollObj = this;
          clearTimeout(_this.AgentBioVisibilityInterval),
            (_this.AgentBioVisibilityInterval = setTimeout(function () {
              _this.setVisibilityOfAgentBio(scrollObj, !0);
            }, 20));
        })),
        $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar({
          theme: "minimal",
          advanced: { autoUpdateTimeout: 15 },
          callbacks: scrollbarCallbacks,
        }),
        setTimeout(function () {
          _this.isScrollGreaterThanBio()
            ? $("#" + _this.ChatHeaderAgentBioContainerId).hide()
            : $("#" + _this.ChatHeaderAgentBioContainerId).text() &&
              $("#" + _this.ChatHeaderAgentBioContainerId).show();
        }, 100);
    }
    Formilla.isWix && screen.height <= 720 && $("#desktopPowerBy").hide(),
      LoadFileAttachmentControlWidgetV4(),
      (Formilla.fileAttachmentControl = new FileAttachmentControlWidgetV4({
        secureReferrer: "https://" + Formilla.formillaDomain,
        fileStorageSecureReferrer:
          "https://" + Formilla.fileStorageSecureReferrer,
        errorMessages: fileAttachments.ErrorMessages,
        isEnabled: fileAttachments.IsEnabled,
      }));
  }),
  (FormillaLiveChatWidgetV4.prototype.onWindowResize = function () {
    var _this = this;
    if (
      null != Formilla.contentElement &&
      null != Formilla.contentElement.style &&
      "none" != Formilla.contentElement.style.display
    ) {
      var isPreChatHeaderVisible = $(
          "#" + this.ChatHeaderPreChatContainerId
        ).is(":visible"),
        isRequestEmailFocused =
          0 <
          $("." + this.RequestEmailAddressContainerId).find(":focus").length;
      isRequestEmailFocused &&
        setTimeout(function () {
          var requestEmailContainer = $(
            "." + _this.RequestEmailAddressContainerId
          ).first();
          _this._scrollToElement(requestEmailContainer);
        }, 50),
        !Formilla.isMobile.any() ||
          isPreChatHeaderVisible ||
          isRequestEmailFocused ||
          setTimeout(function () {
            _this.adjustChatContainerScroll();
          }, 50);
    }
  }),
  (FormillaLiveChatWidgetV4.prototype._scrollMessageContainerDown = function (
    avoidAnimation
  ) {
    if (avoidAnimation) {
      $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar(
        "scrollTo",
        ["bottom", null],
        { scrollInertia: 0 }
      );
      var _this = this;
      setTimeout(function () {
        $("#" + _this.ChatMessagesScrollContainer).css("visibility", "visible");
      }, 70);
    } else
      $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar(
        "scrollTo",
        ["bottom", null],
        { scrollInertia: 600 }
      );
  }),
  (FormillaLiveChatWidgetV4.prototype._scrollToElement = function (element) {
    $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar(
      "scrollTo",
      element
    );
  }),
  (FormillaLiveChatWidgetV4.prototype._disableScroll = function (
    doNotHideScroll
  ) {
    $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar("disable"),
      doNotHideScroll ||
        $("#" + this.ChatMessagesScrollContainer)
          .find("#mCSB_1_scrollbar_vertical")
          .show();
  }),
  (FormillaLiveChatWidgetV4.prototype._enableScroll = function () {
    $("#" + this.ChatMessagesScrollContainer).mCustomScrollbar("update");
  }),
  (FormillaLiveChatWidgetV4.prototype.hasScroll = function () {
    return 0 < $("#mCSB_1_dragger_vertical").length;
  }),
  (FormillaLiveChatWidgetV4.prototype.hasVisibleScroll = function () {
    return (
      0 < $("#mCSB_1_dragger_vertical").length &&
      $("#mCSB_1_dragger_vertical").is(":visible")
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.isScrollGreaterThanBio = function () {
    var result = !1;
    if (this.hasScroll()) {
      var agentBioContainer = $("#" + this.ChatHeaderAgentBioContainerId),
        scrollOffset =
          $(".mCSB_draggerContainer").height() - $(".mCSB_dragger").height();
      result =
        Math.max(
          agentBioContainer[0].clientHeight,
          agentBioContainer[0].offsetHeight
        ) < scrollOffset;
    }
    return result;
  }),
  (FormillaLiveChatWidgetV4.prototype._adjustPreChatHeader = function () {
    var _this = this,
      chatHeaderPreChatContainer = $("#" + this.ChatHeaderPreChatContainerId),
      isPreChatHeaderVisible = $(chatHeaderPreChatContainer).is(":visible");
    if (Formilla.isMobile.any() && isPreChatHeaderVisible) {
      var chatContainerHeight = $("#" + this.ChatMessagesContainer)
          .parent()
          .height(),
        mainChatContainer = $("#" + this.MainChatContainerId),
        preChatContainer = $("#" + this.PreChatContainer);
      if (chatContainerHeight < 200) {
        $(mainChatContainer).addClass("chatMinimalHeader"),
          $(chatHeaderPreChatContainer)
            .find(".ch-respond-time, .chatHeaderTypicallyResponds")
            .hide(),
          $("#" + this.ChatHeaderTypicallyRespondsContainerId).hide();
        var focusedPreChatField = $(preChatContainer).find(":focus");
        0 < focusedPreChatField.length &&
          setTimeout(function () {
            _this._scrollToElement(focusedPreChatField);
          }, 50);
      } else {
        setTimeout(function () {
          $(mainChatContainer).removeClass("chatMinimalHeader"),
            $(preChatContainer).find(".formillaPrechatInput").length <= 2 &&
              $(chatHeaderPreChatContainer).find(".ch-respond-time").show(),
            $(chatHeaderPreChatContainer)
              .find(".chatHeaderTypicallyResponds")
              .show();
        }, 300),
          "true" == $("#" + this.ChatHeader).attr("data-isSingleAgent") ||
            $("#" + this.ChatHeaderTypicallyRespondsContainerId).show();
      }
    }
  }),
  (FormillaLiveChatWidgetV4.prototype._adjustChatSessionHeader = function () {
    var mainChatContainer = $("#" + this.MainChatContainerId),
      chatHeaderChatSessionContainer = $(
        "#" + this.ChatHeaderChatSessionContainerId
      ),
      isChatSessionHeaderVisible = $(chatHeaderChatSessionContainer).is(
        ":visible"
      );
    if (Formilla.isMobile.any() && isChatSessionHeaderVisible)
      if (
        $("#" + this.ChatMessagesContainer)
          .parent()
          .height() < 200
      )
        $(mainChatContainer).addClass("chatMinimalHeader"),
          $("#" + this.ChatHeaderTypicallyRespondsContainerId).hide();
      else {
        $(mainChatContainer).removeClass("chatMinimalHeader");
        var isChatAssigned =
            "true" == $("#" + this.ChatHeader).attr("data-isChatAssigned"),
          isSingleAgent =
            "true" == $("#" + this.ChatHeader).attr("data-isSingleAgent");
        isChatAssigned ||
          isSingleAgent ||
          $("#" + this.ChatHeaderTypicallyRespondsContainerId).show();
      }
  }),
  (FormillaLiveChatWidgetV4.prototype.addAttachmentLoader = function (
    messageHtml
  ) {
    var _this = this;
    $(messageHtml).each(function (index, value) {
      if (0 < $(value).find(".fileThumbnail img").length) {
        $(value).find(".fileIcon").hide();
        var spFileLoader = document.createElement("div");
        $(spFileLoader).addClass("fileIcon fileloader"),
          $(spFileLoader).html("<div class='loader'></div>"),
          $(value).find(".fileIconBg").prepend(spFileLoader),
          (function (value, _this) {
            var imgElement = $(value).find(".fileThumbnail img");
            $(imgElement).on("load", function () {
              $(value).find(".fileloader").remove(),
                $(value).find(".fileIcon").show(),
                _this.adjustChatContainerScroll();
            });
          })(value, _this);
      }
    });
  }),
  (FormillaLiveChatWidgetV4.prototype.addNewMessage = function (
    messageText,
    bHideLabel,
    bReturnAsNodeObject,
    messageSentDate,
    fileAttachments
  ) {
    var messageContainer = $(Formilla.chatMessagesContainer),
      lastMessage = messageContainer.children().last(),
      createContainer = !1,
      hasFileAttachments =
        null != fileAttachments &&
        null != fileAttachments &&
        0 < fileAttachments.length;
    if (lastMessage.hasClass("ch-send-chat")) {
      var messageHtml = this.formatChatMessage(
        messageText,
        bHideLabel,
        !1,
        messageSentDate,
        createContainer,
        fileAttachments
      );
      (messageHtml = $(messageHtml).filter(".ch-box3").hide()),
        ((null != messageText && "" != messageText) || hasFileAttachments) &&
          lastMessage.append(messageHtml),
        $(messageHtml).filter(".ch-box3").fadeIn(this.newMeesageAnimationDelay),
        this.addAttachmentLoader(messageHtml);
    } else {
      createContainer = !0;
      messageHtml = this.formatChatMessage(
        messageText,
        bHideLabel,
        !1,
        messageSentDate,
        createContainer,
        fileAttachments
      );
      (messageHtml = $(messageHtml).filter(".ch-send-chat").hide()),
        ((null != messageText && "" != messageText) || hasFileAttachments) &&
          messageContainer.append(messageHtml),
        $(messageHtml)
          .filter(".ch-send-chat")
          .fadeIn(this.newMeesageAnimationDelay),
        this.addAttachmentLoader(messageHtml);
    }
    this.setStyleForAgentIsTyping(), this.adjustChatContainerScroll();
  }),
  (FormillaLiveChatWidgetV4.prototype.removeActionButtons = function () {
    var elements = document.querySelectorAll(".ch-receive-action");
    if (null != elements && null != elements && 0 < elements.length)
      for (var i = 0; i < elements.length; i++) elements[i].outerHTML = "";
  }),
  (FormillaLiveChatWidgetV4.prototype.clearLastMessageStyle = function () {
    $("#" + this.ChatMessagesDivId)
      .find(".keepChatPadding")
      .removeClass("keepChatPadding");
  }),
  (FormillaLiveChatWidgetV4.prototype.hasMessageAgentPictureFeature =
    function () {
      return !0;
    }),
  (FormillaLiveChatWidgetV4.prototype.setLastAgentImgVisibility = function (
    messageContainer
  ) {
    messageContainer || (messageContainer = $("#" + this.ChatMessagesDivId)),
      messageContainer.find(".ch-receive-chat").each(function (index, value) {
        $(value).find(".ch-person-img").hide(),
          $(value)
            .find(".ch-box1, .ch-box2")
            .last()
            .find(".ch-person-img")
            .show();
      });
  }),
  (FormillaLiveChatWidgetV4.prototype.addNewAgentMessages = function (
    chatMessages,
    cmId,
    isAgentBot
  ) {
    var _this = this,
      messageContainer = $("#" + this.ChatMessagesDivId),
      lastMessage = messageContainer.children().last(),
      lastMessageCmId = lastMessage.attr("data-cmid"),
      lastIsAgentBot = "true" == lastMessage.attr("data-agentbot");
    if (
      !lastMessage.hasClass("ch-receive-chat") ||
      lastIsAgentBot != isAgentBot ||
      (lastMessageCmId && "0" != lastMessageCmId && lastMessageCmId != cmId)
    ) {
      lastMessage.hasClass("ch-receive-chat") &&
        lastMessageCmId != cmId &&
        (chatMessages = $($.parseHTML(chatMessages)).addClass(
          "ch-chat-transfer"
        )),
        lastIsAgentBot != isAgentBot && _this.removeActionButtons();
      var messages = $(chatMessages)
        .filter(
          ".ch-receive-chat, .ch-receive-action, .ch-receive-collectinput"
        )
        .hide();
      _this.addAttachmentLoader(messages),
        messageContainer.append(messages),
        messages
          .filter(
            ".ch-receive-chat, .ch-receive-action, .ch-receive-collectinput"
          )
          .fadeIn(this.newMeesageAnimationDelay),
        Formilla.liveChatWidgetInstance.bindEventsOnInitCollectInputs();
    } else {
      var messageHtml = $($.parseHTML("<div>" + chatMessages + "</div>"));
      messageHtml.find(".ch-box1, .ch-box2").each(function (index, element) {
        (element = $(element).removeClass("ch-box1")),
          (element = $(element).addClass("ch-box2")),
          (element = $(element).hide());
      });
      var innerMessages = messageHtml.find(".ch-box2");
      _this.addAttachmentLoader(innerMessages),
        lastMessage.append(innerMessages),
        $(lastMessage).find(".ch-box2").fadeIn(this.newMeesageAnimationDelay);
    }
    this.setLastAgentImgVisibility(),
      setTimeout(function () {
        _this.adjustChatContainerScroll();
      }, 100);
  }),
  (FormillaLiveChatWidgetV4.prototype.processChatBotResponse = function (
    hasChatBotResponded,
    JSONData
  ) {
    var that,
      chatBotResponded,
      _that = this;
    hasChatBotResponded &&
      (_that.clearLastMessageStyle(),
      (that = this),
      (chatBotResponded = hasChatBotResponded),
      window.setTimeout(function () {
        chatBotResponded && _that.removeLastSentStatusElement(),
          that.addNewAgentMessages(
            JSONData.ChatMessages,
            JSONData.CmId,
            JSONData.IsAgentBot
          ),
          chatBotResponded &&
            that.markLastMessageAsSent(
              Formilla.chatPopupMessageSentText,
              chatBotResponded
            ),
          that.hasScroll() &&
            !that.hasVisibleScroll() &&
            (that._enableScroll(), that.adjustChatContainerScroll());
      }, that.chatBotResponseDelay)),
      null != JSONData.HideSendChatMessage &&
        null != JSONData.HideSendChatMessage &&
        window.setTimeout(function () {
          _that.hideSendChatMessageContainer(JSONData.HideSendChatMessage),
            _that.adjustChatContainerScroll();
        }, _that.chatBotResponseDelay),
      null != JSONData.AgentName &&
        null != JSONData.AgentName &&
        "" != JSONData.AgentName &&
        window.setTimeout(function () {
          _that.onFormillaRenderAgentPic(JSONData);
        }, _that.chatBotResponseDelay);
  }),
  (FormillaLiveChatWidgetV4.prototype.setVisibilityOfAgentBio = function (
    scrollObj,
    forceShowAgentBio
  ) {
    var $agentBioContainer = $("#" + this.ChatHeaderAgentBioContainerId);
    if (Formilla.isChatWidgetVisible())
      if (
        forceShowAgentBio ||
        (null != scrollObj.mcs && 0 <= scrollObj.mcs.top)
      )
        "" != $agentBioContainer.html().trim() &&
          $agentBioContainer.slideDown(this.bioAnimationDelay, function () {});
      else {
        var scrollOffset =
          $(".mCSB_draggerContainer").height() - $(".mCSB_dragger").height();
        Math.max(
          $agentBioContainer[0].clientHeight,
          $agentBioContainer[0].offsetHeight
        ) < scrollOffset &&
          $agentBioContainer.is(":visible") &&
          $agentBioContainer.slideUp(this.bioAnimationDelay, function () {});
      }
  }),
  (FormillaLiveChatWidgetV4.prototype.hasMessageStatusFeature = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.markLastMessageAsSent = function (
    sendText,
    bDisableAnimation
  ) {
    (null != bDisableAnimation && null != bDisableAnimation) ||
      (bDisableAnimation = !1);
    var lastUserMessageContainer = $("." + this.UserMessageContainerClass)
        .last()
        .find(".ch-chat-cont, .ch-box3")
        .last(),
      currentStatus = $(lastUserMessageContainer).next();
    if (
      null == currentStatus ||
      null == currentStatus ||
      (!currentStatus.is("#" + this.SentStatusContainerId) &&
        !currentStatus.is("#" + this.ReadStatusContainerId))
    ) {
      var _this = this;
      $(lastUserMessageContainer).after(
        _this.getSentStatusElement(sendText, bDisableAnimation)
      ),
        $(lastUserMessageContainer).parent().removeClass("keepChatPadding"),
        bDisableAnimation &&
          $("#" + _this.ChatMessagesDivId)
            .find("#" + _this.SentStatusContainerId)
            .show(),
        setTimeout(function () {
          bDisableAnimation ||
            $("#" + _this.ChatMessagesDivId)
              .find("#" + _this.SentStatusContainerId)
              .fadeIn(_this.sentReadAnimationDelay),
            _this.adjustChatContainerScroll();
        }, 150),
        $("." + this.UserMessageContainerClass)
          .last()
          .addClass("ch-send-chat-with-status");
    } else this.adjustChatContainerScroll();
  }),
  (FormillaLiveChatWidgetV4.prototype.getSentStatusElement = function (
    sendText,
    bDisableAnimation
  ) {
    (null != bDisableAnimation && null != bDisableAnimation) ||
      (bDisableAnimation = !1);
    var span = $("<span/>").attr("id", this.SentStatusContainerId);
    $(span).addClass("ch-sent-time " + this.SentStatusContainerId);
    var backgroundColor =
        "fill:" + Formilla.userChatMessageBackgroundColor + ";",
      textColor = "color:" + Formilla.userChatMessageBackgroundColor + ";";
    return (
      $(span).html(
        "<span style='" +
          textColor +
          "'>" +
          sendText +
          "</span> <i class='ch-watch2 ch-main-theme-color'><svg version='1.1' baseProfile='tiny' id='Layer_1' xmlns:x='&amp;ns_extend;' xmlns:i='&amp;ns_ai;' xmlns:graph='&amp;ns_graphs;' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' overflow='scroll' xml:space='preserve'><switch><g i:extraneous='self'><path style='" +
          backgroundColor +
          "' fill='#1169EA' d='M12,2c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10C6.5,22,2,17.5,2,12C2,6.5,6.5,2,12,2z M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M16.4,7.5l-5.6,5.8l-2.6-2.5l-1.9,1.9l4.5,4.4l7.5-7.6L16.4,7.5z'></path></g></switch></svg> </i>"
      ),
      bDisableAnimation || $(span).hide(),
      span
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.removeLastSentStatusElement =
    function () {
      var sentElement = document.getElementById(this.SentStatusContainerId),
        parent = sentElement ? sentElement.parentNode : null;
      FormillaBaseLiveChatWidget.prototype.removeLastSentStatusElement.call(
        this
      ),
        parent && $(parent).removeClass("ch-send-chat-with-status");
    }),
  (FormillaLiveChatWidgetV4.prototype.markLastMessageAsRead = function (
    readText,
    lastAgentViewedTimestamp,
    bDisableAnimation
  ) {
    var _this = this,
      userMessages = $("." + this.UserMessageContainerClass).find(
        ".ch-chat-cont, .ch-box3"
      );
    $.each($(userMessages).get().reverse(), function () {
      if (
        parseInt($(this).attr("data-sent-timestamp")) <=
        lastAgentViewedTimestamp
      ) {
        var currentStatus = $(this).next();
        if (
          null != currentStatus &&
          null != currentStatus &&
          currentStatus.is("#" + this.ReadStatusContainerId)
        )
          return void this.adjustChatContainerScroll();
        var sentExists = currentStatus.is("#" + _this.SentStatusContainerId);
        _this._disableScroll(!_this.hasVisibleScroll());
        var lastReadElement = $("#" + _this.ReadStatusContainerId);
        bDisableAnimation
          ? lastReadElement.hide()
          : lastReadElement.slideUp(_this.sentReadAnimationDelay),
          sentExists && _this.removeLastSentStatusElement(),
          _this.clearLastMessageStyle();
        var newReadElement = _this.getReadStatusElement(readText);
        $(this).after(newReadElement),
          sentExists && $(this).parent().addClass("keepChatPadding"),
          $(newReadElement).show();
        var element = this;
        return (
          setTimeout(function () {
            lastReadElement.parent().removeClass("ch-send-chat-with-status"),
              lastReadElement.remove(),
              $(element.parentNode).addClass("ch-send-chat-with-status"),
              _this._enableScroll(),
              _this.adjustChatContainerScroll();
          }, _this.sentReadAnimationDelay),
          !1
        );
      }
    });
  }),
  (FormillaLiveChatWidgetV4.prototype.getReadStatusElement = function (
    readText
  ) {
    var span = $("<span/>").attr("id", this.ReadStatusContainerId);
    $(span).addClass("ch-sent-time " + this.ReadStatusContainerId);
    var backgroundColor =
        "fill:" + Formilla.userChatMessageBackgroundColor + ";",
      textColor = "color:" + Formilla.userChatMessageBackgroundColor + ";";
    return (
      $(span).html(
        "<span style='" +
          textColor +
          "'>" +
          readText +
          "</span><i class='ch-watch2 ch-main-theme-color'><svg version='1.1' baseProfile='tiny' id='Layer_1' xmlns:x='&amp;ns_extend;' xmlns:i='&amp;ns_ai;' xmlns:graph='&amp;ns_graphs;' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' overflow='scroll' xml:space='preserve'><switch><g i:extraneous='self'><path style='" +
          backgroundColor +
          "' fill='#1169EA' d='M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M10.8,17.3l-4.5-4.4l1.9-1.9l2.6,2.5l5.6-5.8l1.9,1.9L10.8,17.3z'></path></g></switch></svg> </i>"
      ),
      $(span).hide(),
      span
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.removeLastReadStatusElement =
    function () {
      var readElement = document.getElementById(this.ReadStatusContainerId),
        parent = readElement ? readElement.parentNode : null;
      FormillaBaseLiveChatWidget.prototype.removeLastReadStatusElement.call(
        this
      ),
        parent && $(parent).removeClass("ch-send-chat-with-status");
    }),
  (FormillaLiveChatWidgetV4.prototype.updateLastVisitorViewedTimestamp =
    function (wasProactiveOrRequestChat, unixTimeStamp) {
      if (
        null != Formilla.cookieService.getCookieValue("formillaChatSession") &&
        "yes" != Formilla.cookieService.getCookieValue("formillaIsMinimized")
      )
        if (wasProactiveOrRequestChat)
          (Formilla.lastVisitorViewedTimestamp = unixTimeStamp),
            Formilla.UpdateLastVisitorViewedTimestamp();
        else {
          var lastAgentMessage = $("." + this.AgentMessageContainerClass)
              .last()
              .find(".ch-box1, .ch-box2")
              .last(),
            sentDateTimeStamp = parseInt(
              $(lastAgentMessage).attr("data-sent-timestamp")
            );
          sentDateTimeStamp > Formilla.lastVisitorViewedTimestamp &&
            ((Formilla.lastVisitorViewedTimestamp = sentDateTimeStamp),
            Formilla.UpdateLastVisitorViewedTimestamp());
        }
    }),
  (FormillaLiveChatWidgetV4.prototype.addCssStylesOnParent = function (data) {
    Formilla.addCssStylesOnParent(data.MainPageCSS);
  }),
  (FormillaLiveChatWidgetV4.prototype.processMediaQueries = function () {
    Formilla.parseMediaQueriesFromStyles(
      Formilla.widgetStyles,
      Formilla.liveChatWidgetInstance.StylesheetId
    ),
      (window.parent.window.onresize = Formilla.onWindowResize);
  }),
  (FormillaLiveChatWidgetV4.prototype.disableChatInput = function () {
    $("#" + this.ChatInputDisabledOverlay).show(), (this.chatBtnDisabled = !0);
  }),
  (FormillaLiveChatWidgetV4.prototype.isChatInputDisabled = function () {
    return $("#" + this.ChatInputDisabledOverlay).is(":visible");
  }),
  (FormillaLiveChatWidgetV4.prototype.enableChatInput = function () {
    $("#" + this.ChatInputDisabledOverlay).hide();
  }),
  (FormillaLiveChatWidgetV4.prototype.hasMobileStyles = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.hideOrCloseChatWindow = function () {
    var _this = this;
    $("#" + _this.ChatHeaderPreChatContainerId).is(":visible");
    if (this.hasScroll()) {
      var agentBioContainer = $("#" + _this.ChatHeaderAgentBioContainerId),
        scrollOffset =
          $(".mCSB_draggerContainer").height() - $(".mCSB_dragger").height();
      Math.max(
        agentBioContainer[0].clientHeight,
        agentBioContainer[0].offsetHeight
      ) < scrollOffset &&
        agentBioContainer.fadeOut(this.widgetShowAnimationDelay);
    }
    Formilla.isMobile.any() && this._setParentViewport(!1),
      setTimeout(function () {
        $("#" + _this.InitialStateContainerBackgroundId).show();
      }, this.widgetShowAnimationDelay),
      setTimeout(function () {
        (Formilla.isMobile.ipad() || Formilla.isMobile.iOS()) &&
          ((window.parent.document.getElementById(
            "formilla-frame"
          ).style.position = "absolute"),
          setTimeout(function () {
            window.parent.document.getElementById(
              "formilla-frame"
            ).style.position = "fixed";
          }, 50));
      }, this.widgetShowAnimationDelay);
  }),
  (FormillaLiveChatWidgetV4.prototype.renderPreChatFieldsForSmartMessage =
    function () {
      if (
        Formilla.showPreChatFieldsForSmartMessage &&
        0 <
          $("#" + this.PreChatContainer).find(".formillaPrechatInput").length &&
        !Formilla.isCustomBotDisplayed
      ) {
        $("#" + this.PreChatContainer + " .desktopPreChatPowerBy").attr(
          "style",
          "display:none;"
        ),
          $("#" + this.PreChatContainer + " .mobilePreChatPowerBy").attr(
            "style",
            "display:none;"
          );
        var preChatContainer = document.getElementById(this.PreChatContainer);
        null != preChatContainer &&
          null != preChatContainer &&
          "" != preChatContainer &&
          (Formilla.chatMessagesContainer.appendChild(preChatContainer),
          Formilla.FormillaShowElement(preChatContainer));
      }
    }),
  (FormillaLiveChatWidgetV4.prototype.validatePrechatFields = function (
    message
  ) {
    var result = this.validateMessageField(message);
    if (
      Formilla.isProactive &&
      (!Formilla.showPreChatFieldsForSmartMessage ||
        Formilla.isCustomBotDisplayed)
    )
      return result;
    if (Formilla.isRequestChat) return result;
    var inputs = $("#" + this.PreChatContainer).find(".formillaPrechatInput"),
      validatePrechatFieldsResult =
        FormillaBaseLiveChatWidget.prototype.validatePrechatFields.call(
          this,
          inputs
        );
    return result && validatePrechatFieldsResult;
  }),
  (FormillaLiveChatWidgetV4.prototype.setPreChatFieldValidationState =
    function (input, isValid) {
      isValid
        ? $(input).next(".ch-close").hide()
        : $(input).next(".ch-close").show();
    }),
  (FormillaLiveChatWidgetV4.prototype.clearPrechatValidations = function () {
    $(Formilla.chatTextbox).removeClass("hasError");
    var inputs = $("#" + this.PreChatContainer).find(".formillaPrechatInput");
    return FormillaBaseLiveChatWidget.prototype.clearPrechatValidations.call(
      this,
      inputs
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.bindPreChatFieldEvents = function (
    input
  ) {
    var type = $(input).attr("data-field-type"),
      _this = this;
    (input.onkeyup = function (e) {
      9 != e.keyCode &&
        (Formilla.validatePrechatField(input)
          ? (_this.setPreChatFieldValidationState(input, !0),
            "Email" == type && (Formilla.chatEmailTextboxValidator = !0))
          : ("Email" != type ||
              ("Email" == type && Formilla.chatEmailTextboxValidator)) &&
            _this.setPreChatFieldValidationState(input, !1));
    }),
      (input.onblur = function () {
        Formilla.validatePrechatField(input)
          ? _this.setPreChatFieldValidationState(input, !0)
          : _this.setPreChatFieldValidationState(input, !1);
      }),
      (input.onkeydown = function (event) {
        var result = Formilla.handleOnEnterKey(this, event);
        return $(this).focus(), result;
      }),
      "select-one" == input.type &&
        (input.onchange = function (e) {
          Formilla.validatePrechatField(input)
            ? _this.setPreChatFieldValidationState(input, !0)
            : _this.setPreChatFieldValidationState(input, !1);
        });
  }),
  (FormillaLiveChatWidgetV4.prototype.getPrechatFormValues = function () {
    var inputs = $("#" + this.PreChatContainer).find(".formillaPrechatInput");
    return FormillaBaseLiveChatWidget.prototype.getPrechatFormValues.call(
      this,
      inputs
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.validateCollectInputs = function (
    inputs
  ) {
    if (
      FormillaBaseLiveChatWidget.prototype.validateCollectInputs.call(
        this,
        inputs
      )
    ) {
      for (var i = 0; i < inputs.length; i++)
        $(inputs[i]).parent().find(".ch-theme-color").show(),
          i == inputs.length - 1 &&
            $(inputs[i])
              .parent()
              .find(".ch-theme-color i")
              .removeClass("icon-chevron-right")
              .addClass("icon-check");
      return !0;
    }
    return !1;
  }),
  (FormillaLiveChatWidgetV4.prototype.setCollectInputValidationState =
    function (input, isValid) {
      isValid
        ? ($(input).next(".ch-close").hide(),
          $(input).parent().find(".submit").show())
        : ($(input).next(".ch-close").show(),
          $(input).parent().find(".submit").hide());
    }),
  (FormillaLiveChatWidgetV4.prototype.validateMessageField = function (
    message
  ) {
    var result = FormillaBaseLiveChatWidget.prototype.validateMessageField.call(
      this,
      message
    );
    return (
      result ||
        (result = Formilla.fileAttachmentControl.validateFileAttachments()),
      result
        ? $(Formilla.chatTextbox).removeClass("hasError")
        : $(Formilla.chatTextbox).addClass("hasError"),
      result
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getChatBotAction = function (obj) {
    if (null == obj.attributes["data-chatbot-id"]) return null;
    var action = {};
    return (
      (action.MessageGuid =
        null != obj.attributes["data-id"]
          ? obj.attributes["data-id"].value
          : ""),
      (action.Message =
        null != obj.attributes["data-action-message"]
          ? obj.attributes["data-action-message"].value
          : ""),
      (action.ChatBotId =
        null != obj.attributes["data-chatbot-id"]
          ? obj.attributes["data-chatbot-id"].value
          : null),
      (action.ChatBotType =
        null != obj.attributes["data-chatbot-type"]
          ? obj.attributes["data-chatbot-type"].value
          : null),
      (action.ActionId =
        null != obj.attributes["data-action-id"]
          ? obj.attributes["data-action-id"].value
          : null),
      (action.ActionType =
        null != obj.attributes["data-action-type"]
          ? obj.attributes["data-action-type"].value
          : null),
      action
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getCollectInputFields = function (
    isAllInputs
  ) {
    return isAllInputs
      ? $(
          "#" +
            Formilla.liveChatWidgetInstance.ChatMessagesDivId +
            " .ch-receive-collectinput"
        )
          .last()
          .find("input")
      : $(
          "#" +
            Formilla.liveChatWidgetInstance.ChatMessagesDivId +
            " .ch-receive-collectinput"
        )
          .last()
          .find("input:not([disabled])");
  }),
  (FormillaLiveChatWidgetV4.prototype.getWixIframeSize = function (
    isChatVisible,
    isAttnGrabberVisible,
    isSnippetVisible
  ) {
    var left,
      right,
      bottom,
      result = { height: 0, width: this.MaxWidgetWidth },
      iframe = window.parent.document.getElementById("formilla-frame");
    try {
      (left = iframe.style.left.replace("px", "")),
        (right = iframe.style.right.replace("px", "")),
        (bottom = iframe.style.bottom.replace("px", "")),
        right && (right = parseInt(right)),
        left && (left = parseInt(left)),
        bottom && (bottom = parseInt(bottom));
    } catch (e) {}
    if (isChatVisible) {
      var height = this.MaxWidgetHeight;
      bottom && (height += bottom), (result.height = height);
    } else
      isAttnGrabberVisible
        ? (result.height = 360)
        : (isSnippetVisible
            ? ((result.height =
                Formilla.liveChatWidgetInstance.getSnippetHeight()),
              (result.width =
                Formilla.liveChatWidgetInstance.getSnippetWidth()))
            : (Formilla.AdjustChatButtonWidth
                ? (result.width = 340)
                : (result.width = 100),
              (result.height = 110)),
          bottom && (result.height += bottom));
    return (
      left && (result.width += left), right && (result.width += right), result
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.handleWixEditorDisplay = function () {
    var divFormillaChat = document.getElementById("divFormillaChat"),
      divSetupWarning = document.getElementById("divSetupWarning"),
      iframe = window.parent.document.getElementById("formilla-frame");
    Formilla.isBottomLeftLocation
      ? (iframe.style.setProperty("left", "15px", "important"),
        divFormillaChat && (divFormillaChat.style.left = "0px"))
      : (iframe.style.setProperty("right", "15px", "important"),
        divFormillaChat && (divFormillaChat.style.right = "0px")),
      iframe.style.setProperty("bottom", "0px", "important"),
      divFormillaChat &&
        ((divFormillaChat.style.visibility = "hidden"),
        (divFormillaChat.style.bottom = "0px"),
        (divFormillaChat.style.top = "auto"),
        (divFormillaChat.style.paddingBottom = "0px"),
        $(".ch-home .outer-wrap").height("80%"),
        $("#divFormillaChat .outer-wrap").css("height", "calc(100% - 30px)")),
      divSetupWarning && (divSetupWarning.style.display = "none"),
      Formilla.chatButton &&
        ((Formilla.chatButton.style.visibility = "hidden"),
        Formilla.isBottomLeftLocation
          ? (Formilla.chatButton.style.removeProperty("left"),
            (Formilla.chatButton.style.left = "0px"))
          : (Formilla.chatButton.style.removeProperty("right"),
            (Formilla.chatButton.style.right = "0px")));
    var maxHeight = this.MaxWidgetHeight;
    (maxHeight = this.checkWixMaxHeight(maxHeight)),
      parent.Wix.resizeWindow(this.MaxWidgetWidth, maxHeight);
  }),
  (FormillaLiveChatWidgetV4.prototype.showChatButtonOnWixEditor = function () {
    return !1;
  }),
  (FormillaLiveChatWidgetV4.prototype.handleWixPreviewDisplay = function () {
    var divFormillaChat = document.getElementById("divFormillaChat");
    divFormillaChat &&
      ((divFormillaChat.style.display = "none"),
      (divFormillaChat.style.paddingBottom = "30px"),
      (divFormillaChat.style.top = "")),
      Formilla.chatButton && (Formilla.chatButton.style.display = "block");
  }),
  (FormillaLiveChatWidgetV4.prototype.onWixStylesChange = function (isDemo) {
    var wixStyles = (
      isDemo
        ? document.getElementById("widgetVersion4WixStyles")
        : window.parent.window.document.getElementById(
            "widgetVersion4WixStyles"
          )
    ).innerHTML;
    if (0 != wixStyles.length) {
      var widgetColor = this.getStyleProperty(
          wixStyles,
          "chatWidgetBackgroundColor",
          "background-color"
        ),
        textColor = this.getStyleProperty(
          wixStyles,
          "chatWidgetTextColor",
          "color"
        ),
        wixColorTemplate = this.getWidgetColorsWixTemplate(
          textColor.trim(),
          widgetColor.trim()
        );
      if (0 == (wixStyles = $("#widgetVersion4WixColorStyles")).length) {
        document.getElementById("widgetVersion4WixStyles");
        var style = document.createElement("style");
        (style.id = "widgetVersion4WixColorStyles"),
          (style.type = "text/css"),
          style.appendChild(document.createTextNode(wixColorTemplate)),
          document.head.appendChild(style);
      } else wixStyles[0].innerHTML = wixColorTemplate;
    }
  }),
  (FormillaLiveChatWidgetV4.prototype.getStyleProperty = function (
    styles,
    className,
    propertyName
  ) {
    for (
      var classStylesRegex = new RegExp(".*" + className + "[^}]*{[^}]*}", "g"),
        classStylesResult = null,
        classStyles = "";
      (classStylesResult = classStylesRegex.exec(styles)) &&
        (classStyles += classStylesResult[0]),
        classStylesResult;

    );
    classStyles = classStyles.replace(/\s+/g, "");
    var regexResult = new RegExp(
      ".*" + className + "{([^}]*;)?" + propertyName + ":([^;]*)!important?;.*}"
    ).exec(classStyles);
    return null != regexResult ? regexResult[2] : "";
  }),
  (FormillaLiveChatWidgetV4.prototype.getWidgetColorsWixTemplate = function (
    textHexColor,
    widgetHexColor
  ) {
    var rgbRegex = new RegExp(/rgb\((\d+),(\d+),(\d+)\)/),
      formatHsl = function (hsl) {
        return (
          "hsl(" +
          hsl[0].toFixed(2) +
          ", " +
          Math.floor(100 * hsl[1]) +
          "%, " +
          Math.floor(100 * hsl[2]) +
          "%)"
        );
      },
      cssTemplate = $("#wix-color-sheet-template").text();
    if (!cssTemplate || !Wix) return "";
    var textRgbColor = Formilla.hexToRgb(textHexColor),
      widgetRgbColor = Formilla.hexToRgb(widgetHexColor);
    if (null == textRgbColor) {
      var textRgbResult = rgbRegex.exec(textHexColor.replace(/\s+/, ""));
      null != textRgbResult &&
        (textRgbColor = {
          r: parseInt(textRgbResult[1]),
          g: parseInt(textRgbResult[2]),
          b: parseInt(textRgbResult[3]),
        });
    }
    if (null == widgetRgbColor) {
      var widgetRgbResult = rgbRegex.exec(widgetHexColor.replace(/\s+/, ""));
      null != widgetRgbResult &&
        (widgetRgbColor = {
          r: parseInt(widgetRgbResult[1]),
          g: parseInt(widgetRgbResult[2]),
          b: parseInt(widgetRgbResult[3]),
        });
    }
    if (null == textRgbColor || null == widgetRgbColor)
      return console.error("Cannot parse wix colors"), "";
    var textOriginalColorHsl = formatHsl(
        Formilla.rgbToHsl(textRgbColor.r, textRgbColor.g, textRgbColor.b)
      ),
      widgetOriginalColorHsl = formatHsl(
        Formilla.rgbToHsl(widgetRgbColor.r, widgetRgbColor.g, widgetRgbColor.b)
      ),
      lightWidgetColor = this.hexToHSLColor(widgetRgbColor, 1.45, !1, 0.85),
      highlyLightWidgetColor = this.hexToHSLColor(widgetRgbColor, 0.93, !0),
      veryLightWidgetColor = this.hexToHSLColor(widgetRgbColor, 0.97, !0),
      darkWidgetColor = this.hexToHSLDarkColor(widgetRgbColor),
      backgroundImgDarkColor = this.hexToHSLColor(widgetRgbColor, 0.84),
      backgroundPoweredByLightColor = this.hexToHSLColor(
        widgetRgbColor,
        0.85,
        !0
      );
    return (cssTemplate = (cssTemplate = (cssTemplate = (cssTemplate =
      (cssTemplate = (cssTemplate = (cssTemplate = (cssTemplate =
        cssTemplate.replace(
          /'##OriginalWidgetColor##'/g,
          widgetOriginalColorHsl
        )).replace(/'##OriginalTextColor##'/g, textOriginalColorHsl)).replace(
        /'##LightWidgetColor##'/g,
        lightWidgetColor
      )).replace(
        /'##HighlyLightWidgetColor##'/g,
        highlyLightWidgetColor
      )).replace(/'##VeryLightWidgetColor##'/g, veryLightWidgetColor)).replace(
      /'##DarkWidgetColor##'/g,
      darkWidgetColor
    )).replace(
      /'##BackgroundImgDarkColor##'/g,
      backgroundImgDarkColor
    )).replace(
      /'##BackgroundPoweredByLightColor##'/g,
      backgroundPoweredByLightColor
    ));
  }),
  (FormillaLiveChatWidgetV4.prototype.hexToHSLColor = function (
    rgb,
    brightnessFactor,
    useAsAbsoluteFactor,
    maxBrightness
  ) {
    var hsl = Formilla.rgbToHsl(rgb.r, rgb.g, rgb.b);
    maxBrightness || (maxBrightness = 0),
      null == useAsAbsoluteFactor && (useAsAbsoluteFactor = !1);
    var h = hsl[0],
      s = Math.floor(100 * hsl[1]),
      l = useAsAbsoluteFactor ? brightnessFactor : hsl[2] * brightnessFactor;
    return (
      0 < maxBrightness && maxBrightness < l && (l = maxBrightness),
      "hsl(" +
        h.toFixed(2) +
        ", " +
        s.toFixed(2) +
        "%, " +
        Math.floor(100 * l) +
        "%)"
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.hexToHSLDarkColor = function (rgb) {
    var hsl = Formilla.rgbToHsl(rgb.r, rgb.g, rgb.b),
      brightness = 0,
      h = hsl[0],
      s = Math.floor(100 * hsl[1]),
      l = hsl[2];
    return (
      (brightness = l < 0.5 ? 0.6 * l : l < 0.7 ? 0.75 * l : 0.85 * l),
      "hsl(" +
        h.toFixed(2) +
        ", " +
        s.toFixed(2) +
        "%, " +
        Math.floor(100 * brightness) +
        "%)"
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.bindRequireEmailAddressEvents = function (
    emailInput,
    requestEmailBtn
  ) {
    var _this = this;
    (Formilla.chatEmailTextboxValidator = !1),
      emailInput ||
        (emailInput = $("." + this.RequestEmailAddressInputId).first()),
      requestEmailBtn ||
        (requestEmailBtn = $(".requestEmailAddressBtn").first()),
      $(emailInput).keyup(function (e) {
        if (9 != e.which) {
          var isValid = Formilla.FormillaIsValidEmail(this.value);
          isValid && (Formilla.chatEmailTextboxValidator = !0),
            Formilla.chatEmailTextboxValidator &&
              _this.setPreChatFieldValidationState(emailInput, isValid),
            null != Formilla.contactData &&
              Formilla.contactData.Email &&
              Formilla.contactData.Email != this.value &&
              $("." + _this.RequestEmailAddressContainerId)
                .find(".requestEmailAddressBtn i")
                .removeClass("icon-check")
                .addClass("icon-chevron-right");
        }
      }),
      $(emailInput).blur(function () {
        var isValid =
          "" == this.value || Formilla.FormillaIsValidEmail(this.value);
        _this.setPreChatFieldValidationState(emailInput, isValid),
          _this.onRequireEmailAddressSubmit(!0);
      }),
      $(emailInput).keydown(function (e) {
        if (13 == e.which) return _this.onRequireEmailAddressSubmit(), !1;
      }),
      $(requestEmailBtn).click(function () {
        _this.onRequireEmailAddressSubmit();
      });
  }),
  (FormillaLiveChatWidgetV4.prototype.onRequireEmailAddressSubmit = function (
    avoidIconChange
  ) {
    var emailInput = $("." + this.RequestEmailAddressInputId),
      email = emailInput.val();
    Formilla.FormillaIsValidEmail(email)
      ? (this.setPreChatFieldValidationState(emailInput, !0),
        Formilla.loginUserInternal(email),
        Formilla.SetFormillaContactDataEmail(email),
        avoidIconChange ||
          $("." + this.RequestEmailAddressContainerId)
            .find(".requestEmailAddressBtn i")
            .removeClass("icon-chevron-right")
            .addClass("icon-check"),
        null != Formilla.googleAnalyticService &&
          Formilla.googleAnalyticService.prechatConversion(email),
        $("." + this.RequestEmailAddressContainerId).addClass(
          "requestEmailConversion"
        ))
      : this.setPreChatFieldValidationState(emailInput, !1);
  }),
  (FormillaLiveChatWidgetV4.prototype.hasSnippetFeature = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.isSnippetVisible = function () {
    return $("#" + this.SnippetContainerId).is(":visible");
  }),
  (FormillaLiveChatWidgetV4.prototype.showSnippet = function (
    message,
    agentPic,
    messageCount,
    isAutoMessage,
    isChatRequest,
    isFileAttachment
  ) {
    if (
      ((this.wasLastMessageAnAM = !!isAutoMessage),
      (this.wasLastMessageAChatRequest = !!isChatRequest),
      isFileAttachment
        ? $("#" + this.SnippetContainerId).addClass(
            "snippet-has-file-attachments"
          )
        : $("#" + this.SnippetContainerId).removeClass(
            "snippet-has-file-attachments"
          ),
      $("#" + this.SnippetMessageContainerId).html(
        this._formatAgentMessageForSnippet(message)
      ),
      isAutoMessage && Formilla.BindAutoMessageLinks(!0),
      $("#" + this.SnippetMessageContainerId)
        .find("a")
        .click(function (event) {
          event.stopImmediatePropagation();
        }),
      agentPic)
    ) {
      var src =
        Formilla.formillaProtocol() + Formilla.formillaDomain + agentPic;
      $("#" + this.SnippetContainerId)
        .find(".ch-snippet")
        .addClass("hasAgentPic"),
        $("#" + this.SnippetContainerId)
          .find(".ch-snippet-person-img")
          .html("<img src='" + src + "' style='width:40px;'>");
    } else
      $("#" + this.SnippetContainerId)
        .find(".ch-snippet")
        .removeClass("hasAgentPic"),
        $("#" + this.SnippetContainerId)
          .find(".ch-snippet-person-img")
          .html("");
    messageCount
      ? (this.snippetBadgeNumber += parseInt(messageCount))
      : (this.snippetBadgeNumber = 1),
      $("#" + this.SnippetBadgeNumberContainerId).text(this.snippetBadgeNumber),
      this.bindSnippetEvents(),
      $("#" + this.SnippetContainerId).fadeIn(this.snippetShowAnimationDelay),
      (Formilla.cookieService.getCookieValue("formillaChatSession") ||
        this.wasLastMessageAChatRequest) &&
        this.storeSnippetState(!0);
  }),
  (FormillaLiveChatWidgetV4.prototype._formatAgentMessageForSnippet = function (
    message
  ) {
    if (
      $("#" + this.SnippetContainerId).hasClass("snippet-has-file-attachments")
    )
      return message;
    for (
      var match,
        limit = 105,
        patt = /<a href=/gim,
        linkifyMessage = Formilla.FormillaLinkify(message),
        stopSearching = !1;
      null != (match = patt.exec(linkifyMessage)) && !stopSearching;

    ) {
      var indexOfStartATag = match.index;
      if (indexOfStartATag < limit) {
        limit += 110;
        var newLimit = linkifyMessage.indexOf("</a>", indexOfStartATag) + 4;
        limit < newLimit && ((limit = newLimit), (stopSearching = !0));
      } else stopSearching = !0;
    }
    return (
      linkifyMessage.length > limit &&
        (linkifyMessage = linkifyMessage.substr(0, limit) + "..."),
      linkifyMessage
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.restoreSnippetState = function () {
    var state = this.getSnippetState();
    if (
      state &&
      ((this.snippetBadgeNumber = state.badgeNumber),
      $("#" + this.SnippetBadgeNumberContainerId).text(this.snippetBadgeNumber),
      state.isSnippetVisible)
    ) {
      Formilla.hideLiveChatBtn();
      var message = $("#" + this.SnippetMessageContainerId)
        .html()
        .trim();
      $("#" + this.SnippetMessageContainerId).html(
        this._formatAgentMessageForSnippet(message)
      ),
        this.bindSnippetEvents(),
        $("#" + this.SnippetContainerId).fadeIn(
          this.snippetRestoreAnimationDelay
        ),
        Formilla.FormillaResizeIframeContainer(!1, !1);
    }
  }),
  (FormillaLiveChatWidgetV4.prototype.storeSnippetState = function (
    isSnippetVisible
  ) {
    Formilla.cookieService.addSessionCookie(
      this.snippetSateCookieKey,
      JSON.stringify({
        badgeNumber: this.snippetBadgeNumber,
        isSnippetVisible: isSnippetVisible,
      })
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getSnippetState = function () {
    var json = Formilla.cookieService.getCookieValue(this.snippetSateCookieKey);
    return JSON.parse(json);
  }),
  (FormillaLiveChatWidgetV4.prototype.deleteSnippetState = function () {
    Formilla.cookieService.deleteCookie(this.snippetSateCookieKey);
  }),
  (FormillaLiveChatWidgetV4.prototype.hideSnippet = function (event) {
    this.updateFormillaContainer(),
      event.stopImmediatePropagation(),
      this.wasLastMessageAnAM && Formilla.DeleteAutoMessageCookie(),
      this.wasLastMessageAChatRequest &&
        (Formilla.cookieService.deleteCookie("formillaRequestChat"),
        Formilla.cookieService.addSessionCookie(
          "formillaIsChatWindowOpen",
          "no"
        )),
      $("#" + this.SnippetContainerId).fadeOut(this.snippetShowAnimationDelay),
      $("#" + this.SnippetContainerId).removeClass(
        "snippet-has-file-attachments"
      ),
      Formilla.cookieService.getCookieValue("formillaChatSession")
        ? this.storeSnippetState(!1)
        : this.wasLastMessageAChatRequest && this.deleteSnippetState(),
      setTimeout(function () {
        Formilla.showLiveChatBtn(), Formilla.adjustIframeContainer();
      }, this.snippetShowAnimationDelay),
      setTimeout(function () {
        Formilla.FormillaResizeIframeContainer(
          !1,
          Formilla.isAttnGrabberVisible
        );
      }, this.snippetShowAnimationDelay + 50);
  }),
  (FormillaLiveChatWidgetV4.prototype.acceptSnippet = function () {
    this.updateFormillaContainer(),
      $("#" + this.SnippetContainerId).hide(),
      $("#" + this.SnippetContainerId).removeClass(
        "snippet-has-file-attachments"
      ),
      Formilla.cookieService.addSessionCookie(
        "formillaIsChatWindowOpen",
        "yes"
      ),
      Formilla.initFormillaChat();
  }),
  (FormillaLiveChatWidgetV4.prototype.resetSnippetCounter = function () {
    (this.snippetBadgeNumber = 0), this.deleteSnippetState();
  }),
  (FormillaLiveChatWidgetV4.prototype.getSnippetHeight = function () {
    var snippet = $("#" + this.SnippetContainerId),
      snippetMessageBox = snippet.find(".ch-qus-box");
    return (
      snippet.height() +
      (parseInt(snippet.css("padding-bottom")) || 0) +
      snippetMessageBox.outerHeight(!0) +
      15
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.getSnippetWidth = function () {
    var snippet = $("#" + this.SnippetContainerId),
      snippetMessageBox = snippet.find(".ch-qus-box");
    return (
      snippet.width() +
      ("bottom-right" == Formilla.buttonLocation
        ? parseInt(snippet.css("padding-right")) || 0
        : parseInt(snippet.css("padding-left")) || 0) +
      snippetMessageBox.outerWidth(!0) +
      15
    );
  }),
  (FormillaLiveChatWidgetV4.prototype.bindSnippetEvents = function () {
    var _this = this;
    (this.FormillaChatCtrClickEventFtn = function () {
      return _this.isSnippetVisible() && _this.acceptSnippet(), !1;
    }),
      $("#divFormillaChatCtr").bind("click", this.FormillaChatCtrClickEventFtn);
  }),
  (FormillaLiveChatWidgetV4.prototype.updateFormillaContainer = function () {
    $("#divFormillaChatCtr").unbind("click", this.FormillaChatCtrClickEventFtn),
      $("#divFormillaChatCtr").css({ height: "", cursor: "" });
  }),
  (FormillaLiveChatWidgetV4.prototype.hasAnimations = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.showChatButtonAnimation = function () {
    $(Formilla.chatButton).hide(),
      $(Formilla.chatButton).fadeIn(this.chatBtnShowAnimationDelay),
      setTimeout(function () {
        Formilla.adjustIframeContainer(!0, !0);
      }, this.chatBtnShowAnimationDelay);
  }),
  (FormillaLiveChatWidgetV4.prototype.showWidgetAnimation = function () {
    $(Formilla.contentElement).hide(),
      $(Formilla.contentElement).fadeIn(this.widgetShowAnimationDelay);
  }),
  (FormillaLiveChatWidgetV4.prototype.closeWidgetAnimation = function () {
    $(Formilla.chatButton).hide(),
      $(Formilla.contentElement).show(),
      $(Formilla.contentElement).fadeOut(this.widgetShowAnimationDelay),
      setTimeout(function () {
        Formilla.FormillaResizeIframeContainer(
          !1,
          Formilla.isAttnGrabberVisible
        );
        var doNotHideBeforeResize = Formilla.isMobile.any();
        $(Formilla.chatButton).show(),
          $(Formilla.contentElement).hide(),
          Formilla.adjustIframeContainer(doNotHideBeforeResize);
      }, this.widgetShowAnimationDelay);
  }),
  (FormillaLiveChatWidgetV4.prototype.addStandardQueueMessages = function (
    chatMessages,
    queueNumber
  ) {
    if (
      !queueNumber ||
      (0 < (queueNumber = parseInt(queueNumber)) &&
        $(Formilla.chatTextbox).blur(),
      Formilla.queueNumber != queueNumber)
    ) {
      Formilla.queueNumber = queueNumber;
      var messageContainer = $("<div>").append(chatMessages),
        hasUserMessage = $(messageContainer).has(
          "." + this.UserMessageContainerClass
        );
      this.setLastAgentImgVisibility(messageContainer),
        $(Formilla.chatMessagesContainer).html(messageContainer.html()),
        hasUserMessage &&
          this.markLastMessageAsSent(Formilla.chatPopupMessageSentText);
    }
  }),
  (FormillaLiveChatWidgetV4.prototype._setParentViewport = function (
    isChatWidgetInit
  ) {
    var parent = window.parent.document;
    if (isChatWidgetInit) {
      var siteViewport = $("[name='viewport']", parent);
      (Formilla.originalParentViewport = $("<div>")
        .append($(siteViewport).clone())
        .html()),
        $(siteViewport).remove();
      $("head", parent).append(
        "<meta id='formilla-viewport' name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>"
      );
    } else
      $("#formilla-viewport", parent).remove(),
        Formilla.originalParentViewport &&
          $("head", parent).append(Formilla.originalParentViewport);
  }),
  (FormillaLiveChatWidgetV4.prototype.getChatWidgetLocationClass = function () {
    return "bottom-right" == Formilla.buttonLocation
      ? "chat-widget-location-right"
      : "chat-widget-location-left";
  }),
  (FormillaLiveChatWidgetV4.prototype.getChatButtonLocationClass = function () {
    return "bottom-right" == Formilla.buttonLocation
      ? "chat-button-location-right"
      : "chat-button-location-left";
  }),
  (FormillaLiveChatWidgetV4.prototype.getSnippetLocationClass = function () {
    return "bottom-right" == Formilla.buttonLocation
      ? "snippet-location-right"
      : "snippet-location-left";
  }),
  (FormillaLiveChatWidgetV4.prototype.bindMessageTextAreaEvents =
    function () {}),
  (FormillaLiveChatWidgetV4.prototype._adjustHeaderForAndroid = function () {
    if (Formilla.isMobile.Android())
      if (
        null == Formilla.cookieService.getCookieValue("formillaChatSession")
      ) {
        $("#" + this.InitialStateContainerBackgroundId).hide(),
          $("#" + this.MobilePowerById).hide();
        var mainChatContainer = $("#" + this.MainChatContainerId),
          chatHeaderPreChatContainer = $(
            "#" + this.ChatHeaderPreChatContainerId
          );
        $(mainChatContainer).addClass("chatMinimalHeader"),
          $(chatHeaderPreChatContainer).find(".ch-respond-time").hide(),
          $(chatHeaderPreChatContainer)
            .find(".chatHeaderTypicallyResponds")
            .hide();
      } else $("#" + this.ChatHeaderTypicallyRespondsContainerId).hide();
  }),
  (FormillaLiveChatWidgetV4.prototype.getChatWidgetMinHeight = function () {
    var isInitialState = $("#" + this.InitialStateHeader).is(":visible");
    return isInitialState && 950 < screen.height
      ? "650px"
      : isInitialState
      ? "550px"
      : "450px";
  }),
  (FormillaLiveChatWidgetV4.prototype.getInitialIframeWidth = function () {
    return "96px";
  }),
  (FormillaLiveChatWidgetV4.prototype.useFullWixHeight = function () {
    return !1;
  }),
  (FormillaLiveChatWidgetV4.prototype.checkWixMaxHeight = function (height) {
    var newMaxHeight = Formilla.wixIframeCoordinates.bottom - 50;
    return newMaxHeight < height && (height = newMaxHeight), height;
  }),
  (FormillaLiveChatWidgetV4.prototype.hasAttentionGrabberFeature = function () {
    return !1;
  }),
  (FormillaLiveChatWidgetV4.prototype.hasFileAttachmentsFeature = function () {
    return !0;
  }),
  (FormillaLiveChatWidgetV4.prototype.initCalendlyApp = function (element) {
    if (Formilla.isCalendlyLoaded) this.loadCalendlyApp(element);
    else {
      var head = document.getElementsByTagName("head").item(0),
        script = document.createElement("script"),
        styles = document.createElement("link"),
        domain = document
          .querySelector('script[src*="/scripts/feedback.js"]')
          .src.replace(/scripts\/feedback.*/, "");
      script.setAttribute("type", "text/javascript"),
        script.setAttribute(
          "src",
          domain + "remoteAssets/js/widgets/v4/calendly.widget.js"
        ),
        script.setAttribute("async", !0),
        styles.setAttribute("rel", "stylesheet"),
        styles.setAttribute(
          "href",
          "https://assets.calendly.com/assets/external/widget.css"
        ),
        (that = this),
        (control = element),
        (script.onload = script.onreadystatechange =
          function () {
            Formilla.isCalendlyLoaded ||
              (this.readyState &&
                "loaded" != this.readyState &&
                "complete" != this.readyState) ||
              ((Formilla.isCalendlyLoaded = !0), that.loadCalendlyApp(control));
          }),
        head.appendChild(script),
        head.appendChild(styles);
    }
    var that, control;
  }),
  (FormillaLiveChatWidgetV4.prototype.loadCalendlyApp = function (element) {
    var that,
      baseContainer,
      control,
      contactName,
      contactFirstName,
      contactLastName,
      contactEmail,
      container = document.getElementsByClassName("calendly-popup")[0];
    (container.style.display = "block"),
      (document.getElementsByClassName(
        "calendly-popup-overlay"
      )[0].style.display = "block"),
      (that = this),
      (baseContainer = container),
      (control = element),
      (contactEmail = contactLastName = contactFirstName = contactName = ""),
      null != Formilla.contactData &&
        null != Formilla.contactData &&
        (null != Formilla.contactData.FirstName &&
          null != Formilla.contactData.FirstName &&
          (contactFirstName = Formilla.contactData.FirstName),
        null != Formilla.contactData.LastName &&
          null != Formilla.contactData.LastName &&
          (contactLastName = Formilla.contactData.LastName),
        null != Formilla.contactData.Email &&
          null != Formilla.contactData.Email &&
          (contactEmail = Formilla.contactData.Email),
        (contactName = contactFirstName + " " + contactLastName)),
      Calendly.initInlineWidget({
        location: Formilla.location,
        url:
          element.getAttribute("data-link") +
          "?hide_landing_page_details=1&amp;hide_gdpr_banner=1",
        parentElement: baseContainer.getElementsByClassName(
          "calendly-popup-body"
        )[0],
        prefill: {
          name: contactName.trim(),
          firstName: contactFirstName,
          lastName: contactLastName,
          email: contactEmail,
        },
      }),
      (FormillaLiveChatWidgetV4.prototype.calendlyEventListener = function (e) {
        0 === e.data.event.indexOf("calendly.event_scheduled") &&
          (Formilla.HandleActionClick(e, control), that.unloadCalendlyApp());
      }),
      window.addEventListener(
        "message",
        FormillaLiveChatWidgetV4.prototype.calendlyEventListener
      );
  }),
  (FormillaLiveChatWidgetV4.prototype.unloadCalendlyApp = function () {
    window.removeEventListener(
      "message",
      FormillaLiveChatWidgetV4.prototype.calendlyEventListener,
      !1
    ),
      (document.getElementsByClassName(
        "calendly-popup-overlay"
      )[0].style.display = "none");
    var container = document.getElementsByClassName("calendly-popup")[0],
      body = container.getElementsByClassName("calendly-popup-body")[0];
    (container.style.display = "none"),
      body.removeChild(body.querySelector("iframe")),
      body.removeChild(body.getElementsByClassName("calendly-spinner")[0]);
  });
