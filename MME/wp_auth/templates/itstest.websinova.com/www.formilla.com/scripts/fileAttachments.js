function FileAttachmentControl(options) {
  (this.ThumbnailSourceType = {}),
    (this.ThumbnailSourceType.File = 0),
    (this.ThumbnailSourceType.UploadedFile = 1),
    (this.ThumbnailSourceType.InprogressFile = 2),
    (this.FileExtensionName = {}),
    (this.FileExtensionName.Pdf = "pdf"),
    (this.FileExtensionName.Txt = "txt"),
    (this.FileExtensionName.Doc = "doc"),
    (this.FileExtensionName.Docx = "docx"),
    (this.FileExtensionName.Xls = "xls"),
    (this.FileExtensionName.Xlsx = "xlsx"),
    (this.FileExtensionName.Csv = "csv"),
    (this.FileExtensionType = {}),
    (this.FileExtensionType.Files =
      "jpg|jpeg|png|gif|pdf|txt|doc|docx|xls|xlsx|csv"),
    (this.FileExtensionType.Images = "jpg|jpeg|png|gif"),
    (this.FileExtensionType.Documents = "pdf|txt|doc|docx|xls|xlsx|csv"),
    (this.Elements = {}),
    (this.Elements.LiveChatTextbox = "txtLiveChatTextbox"),
    (this.Elements.UploadIcon = "paperClipIcon"),
    (this.Elements.PreviewContainer = "previewDiv"),
    (this.Elements.DropMask = "drop-mask"),
    (this.Elements.FileUpload = "fileupload"),
    (this.ChatSessionUnsentData = []),
    (this.ChatSessionUnsentData.UpdateType = {}),
    (this.ChatSessionUnsentData.UpdateType.All = 0),
    (this.ChatSessionUnsentData.UpdateType.ChatMessage = 1),
    (this.ChatSessionUnsentData.UpdateType.AttachmentCount = 2),
    (this.ChatSessionUnsentData.UpdateType.AddUploadRequest = 3),
    (this.ChatSessionUnsentData.UpdateType.DeleteUploadRequest = 4),
    (this.ChatSessionUnsentData.UpdateType.AddUploadedfile = 5),
    (this.ChatSessionUnsentData.UpdateType.DeleteUploadedfile = 6),
    (this.SecureReferrer = options.secureReferrer),
    (this.MaxFileAttachments = options.maxFileAttachments),
    (this.fileStorageSecureReferrer = options.fileStorageSecureReferrer),
    (this.ErrorMessage = {}),
    (this.ErrorMessage.SingleFileTypeError = "File type is not supported"),
    (this.ErrorMessage.SingleFileSizeError =
      "File size must be less than 5 MB"),
    (this.ErrorMessage.SingleFileGeneralError =
      "File upload failed. Please try again."),
    (this.ErrorMessage.SingleMaxFileAttachmentsError =
      "A maximum of 1 file can be sent with a message"),
    (this.ErrorMessage.MultipleFileTypeError =
      "One or more files were not uploaded successfully; file type is not supported"),
    (this.ErrorMessage.MultipleFileSizeError =
      "One or more files were not uploaded successfully; each file must be less than 5 MB"),
    (this.ErrorMessage.MultipleFileGeneralError =
      "One or more files were not uploaded successfully; please try again"),
    (this.ErrorMessage.MultipleMaxFileAttachmentsError =
      "A maximum of " +
      this.MaxFileAttachments +
      " files can be sent with a message"),
    (this.ErrorMessage.MultipleFileInProgressError =
      "Please enter a message or wait until your file(s) have finished uploading."),
    $.extend(this.ErrorMessage, options.errorMessages),
    (this.IsEnabled = options.isEnabled),
    (this.IsEnabledForCurrentChatSession = !0),
    (this.DragTime = null),
    this.init();
}
(FileAttachmentControl.prototype.init = function () {
  this.IsEnabled && (this.initCopyPaste(), this.initDragDrop());
}),
  (FileAttachmentControl.prototype.initDragDrop = function () {
    var drag_mouse_move, drag_over, drag_leave, drag_drop, that;
    (that = this),
      (drag_mouse_move = function (e) {
        $("#" + that.Elements.DropMask).is(":visible") &&
          300 < new Date() - that.DragTime &&
          ((that.DragTime = null), $("#" + that.Elements.DropMask).hide());
      }),
      (drag_over = function (e) {
        e.stopPropagation(),
          e.preventDefault(),
          null != that.DragTime && (that.DragTime = new Date()),
          $("#" + that.Elements.DropMask).is(":visible") ||
            Array.prototype.forEach.call(
              e.dataTransfer.types,
              function (type, i) {
                (e.dataTransfer.types[i].match(/Files.*/) ||
                  e.dataTransfer.items[i].type.match(/image..*/)) &&
                  ($("#" + that.Elements.DropMask).show(),
                  (that.DragTime = new Date()),
                  that.resizeDropMask());
              }
            );
      }),
      (drag_leave = function (e) {
        e.stopPropagation(),
          e.preventDefault(),
          (that.DragTime = null),
          $("#" + that.Elements.DropMask).hide();
      }),
      (drag_drop = function (e) {
        if (
          (e.stopPropagation(),
          e.preventDefault(),
          (that.DragTime = null),
          $("#" + that.Elements.DropMask).hide(),
          that.IsEnabledForCurrentChatSession)
        ) {
          var files = e.dataTransfer.files;
          null != files &&
            null != files &&
            0 < files.length &&
            that.handleFiles(
              document.getElementById(that.Elements.FileUpload),
              files
            );
        }
      });
    var overArea = document.body,
      dropMask = document.getElementById(this.Elements.DropMask);
    null != overArea &&
      null != overArea &&
      null != dropMask &&
      null != dropMask &&
      (overArea.addEventListener("dragenter", drag_over, !1),
      overArea.addEventListener("dragover", drag_over, !1),
      dropMask.addEventListener("dragleave", drag_leave, !1),
      dropMask.addEventListener("drop", drag_drop, !1),
      dropMask.addEventListener("mousemove", drag_mouse_move));
  }),
  (FileAttachmentControl.prototype.resizeDropMask = function () {}),
  (FileAttachmentControl.prototype.initCopyPaste = function () {
    !(function ($, that) {
      var defaults, originalFix;
      ($.event.fix =
        ((originalFix = $.event.fix),
        function (event) {
          return (
            0 ===
              (event = originalFix.apply(this, arguments)).type.indexOf(
                "paste"
              ) && (event.clipboardData = event.originalEvent.clipboardData),
            event
          );
        })),
        (defaults = { callback: $.noop, matchType: /image.*/ }),
        ($.fn.pasteImageReader = function (options) {
          "function" == typeof options && (options = { callback: options }),
            (options = $.extend({}, defaults, options)),
            this.each(function () {
              return $(this).bind("paste", function (event) {
                var clipboardData, found;
                return (
                  (found = !1),
                  null !=
                    (clipboardData =
                      event.clipboardData ||
                      event.originalEvent.clipboardData) &&
                  null != clipboardData
                    ? Array.prototype.forEach.call(
                        clipboardData.types,
                        function (type, i) {
                          if (
                            !found &&
                            0 < clipboardData.types.length &&
                            0 < clipboardData.items.length &&
                            (clipboardData.types[i].match(options.matchType) ||
                              clipboardData.items[i].type.match(
                                options.matchType
                              )) &&
                            that.IsEnabledForCurrentChatSession
                          ) {
                            var file = clipboardData.items[i].getAsFile();
                            return (
                              (file.name = "image.png"),
                              that.handleFiles(
                                document.getElementById(
                                  that.Elements.FileUpload
                                ),
                                [file]
                              ),
                              (found = !0)
                            );
                          }
                        }
                      )
                    : void 0
                );
              });
            });
        });
    })(jQuery, this),
      $("html").pasteImageReader(function (results) {});
  }),
  (FileAttachmentControl.prototype.handleFiles = function (fileUpload, files) {
    if (!this.IsEnabled) return !1;
    var sessionid = this.getActiveChatSessionId();
    if (null == sessionid || null == sessionid) return !1;
    var sessionObject = this.getChatSessionUnsentData(sessionid),
      errorMessage = "";
    if (
      files.length > this.MaxFileAttachments ||
      !this.validateMaxFilesCount(sessionid, files.length)
    )
      return (
        (errorMessage =
          1 == this.MaxFileAttachments
            ? this.ErrorMessage.SingleMaxFileAttachmentsError
            : this.ErrorMessage.MultipleMaxFileAttachmentsError),
        this.showFileUploadErrorMessage(errorMessage),
        void (fileUpload.value = "")
      );
    for (
      var isSingleFile = 1 == files.length, uploadRequests = [], i = 0;
      i < files.length;
      i++
    )
      if (this.validateFileType(files[i].name, this.FileExtensionType.Files))
        if (files[i].size / 1024 / 1024 <= 5) {
          var fileGuid = this.createNewGuid();
          this.createFileThumbnail(
            sessionid,
            fileGuid,
            files[i],
            this.ThumbnailSourceType.File
          );
          var data = new FormData();
          data.append(files[i].name, files[i]);
          var uploadRequest = this.postFile(
            this.getFileUploadUrl(sessionid, files[i].name),
            sessionid,
            data,
            fileGuid,
            files[i].name,
            isSingleFile
          );
          uploadRequests.push(uploadRequest),
            this.updateChatSessionUnsentData(
              sessionid,
              uploadRequest,
              this.ChatSessionUnsentData.UpdateType.AddUploadRequest
            );
        } else
          "" == errorMessage &&
            (errorMessage = isSingleFile
              ? this.ErrorMessage.SingleFileSizeError
              : this.ErrorMessage.MultipleFileSizeError);
      else
        errorMessage = isSingleFile
          ? this.ErrorMessage.SingleFileTypeError
          : this.ErrorMessage.MultipleFileTypeError;
    (fileUpload.value = ""),
      0 < uploadRequests.length &&
        (function (that, uploadRequests) {
          $.when.apply($, uploadRequests).then(function (sessionid) {
            $.each(uploadRequests, function (i, val) {
              that.updateChatSessionUnsentData(
                sessionid,
                val,
                that.ChatSessionUnsentData.UpdateType.DeleteUploadRequest
              );
            }),
              sessionid == that.getActiveChatSessionId() &&
                (sessionObject.AttachmentCount < that.MaxFileAttachments &&
                !sessionObject.ChatEnded
                  ? that.showUploadIcon()
                  : that.hideUploadIcon());
          });
        })(this, uploadRequests),
      "" != errorMessage && this.showFileUploadErrorMessage(errorMessage);
  }),
  (FileAttachmentControl.prototype.createFileThumbnail = function (
    sessionid,
    fileGuid,
    file,
    sourceType
  ) {
    var fileName = "",
      fileExtension = "",
      progressClass = "uploading";
    sourceType == this.ThumbnailSourceType.File
      ? ((fileName = this.escapeQuotes(file.name)),
        (fileExtension = this.getFileExtension(file.name)))
      : sourceType == this.ThumbnailSourceType.UploadedFile
      ? ((progressClass = "uploaded"),
        (fileName = this.escapeQuotes(file.OriginalName)),
        (fileExtension = this.getFileExtension(file.OriginalName)))
      : sourceType == this.ThumbnailSourceType.InprogressFile &&
        ((fileName = this.escapeQuotes(file.FileName)),
        (fileExtension = this.getFileExtension(file.FileName)));
    var that,
      thumbnailCrt = this.getFileThumbnailHtml(
        fileGuid,
        fileName,
        fileExtension,
        progressClass
      );
    if (
      ($("#" + this.Elements.PreviewContainer).append(thumbnailCrt),
      (that = this),
      $(document).on("click", ".deleteFile", function () {
        that.deleteFileThumbnail(this);
      }),
      sourceType == this.ThumbnailSourceType.File)
    )
      this.calculateFileAttachmentCount(sessionid, 1);
    else if (sourceType == this.ThumbnailSourceType.UploadedFile) {
      var thumbnailImg = $(thumbnailCrt).find("img");
      this.validateFileType(file.OriginalName, this.FileExtensionType.Images) &&
        $(thumbnailImg).attr("src", this.getFileUrl(file));
    }
  }),
  (FileAttachmentControl.prototype.getFileThumbnailHtml = function () {
    return "";
  }),
  (FileAttachmentControl.prototype.formatAttachmentThumbnails = function (
    sessionid,
    fileAttachment
  ) {
    return "";
  }),
  (FileAttachmentControl.prototype.showFileThumbnail = function (
    sessionid,
    fileGuid
  ) {
    var img = $(".thumbnailCtr[fileGuid='" + fileGuid + "'] img").filter(
      function () {
        return null == this.src || null == this.src || "" == this.src;
      }
    );
    if (null != img && null != img && 0 < img.length)
      for (
        var sessionObject = this.getChatSessionUnsentData(sessionid), i = 0;
        i < sessionObject.Uploadedfiles.length;
        ++i
      ) {
        var uploadedFile = sessionObject.Uploadedfiles[i];
        if (uploadedFile.Guid == fileGuid) {
          this.validateFileType(
            uploadedFile.ThumbnailFileName,
            this.FileExtensionType.Images
          ) && $(img).attr("src", this.getThumbnailUrl(uploadedFile));
          break;
        }
      }
    $(".thumbnailCtr[fileGuid='" + fileGuid + "']")
      .addClass("uploaded")
      .removeClass("uploading");
  }),
  (FileAttachmentControl.prototype.deleteFileThumbnail = function (deleteLink) {
    var that,
      sessionid = this.getActiveChatSessionId(),
      thumbnailCtr = $(deleteLink).parents(".thumbnailCtr")[0],
      fileGuidToRemove = $(thumbnailCtr).attr("fileGuid");
    (that = this),
      $(thumbnailCtr).fadeOut(400, function () {
        var sessionObject = that.getChatSessionUnsentData(sessionid),
          uploadRequestsCount = sessionObject.UploadRequests.length,
          deletedUploadRequest = $.grep(
            sessionObject.UploadRequests,
            function (item) {
              return item.Guid == fileGuidToRemove;
            }
          ),
          deletedUploadedfile = $.grep(
            sessionObject.Uploadedfiles,
            function (item) {
              return item.Guid == fileGuidToRemove;
            }
          );
        that.updateChatSessionUnsentData(
          sessionid,
          deletedUploadRequest[0],
          that.ChatSessionUnsentData.UpdateType.DeleteUploadRequest
        ),
          that.updateChatSessionUnsentData(
            sessionid,
            deletedUploadedfile[0],
            that.ChatSessionUnsentData.UpdateType.DeleteUploadedfile
          ),
          that.calculateFileAttachmentCount(sessionid, -1),
          $(this).remove(),
          0 < deletedUploadRequest.length &&
            1 == uploadRequestsCount &&
            that.hideFileInProgressErrorMessage(),
          that.deleteFileThumbnailCallback();
      });
  }),
  (FileAttachmentControl.prototype.deleteFileThumbnailCallback =
    function () {}),
  (FileAttachmentControl.prototype.calculateFileAttachmentCount = function (
    sessionid,
    value
  ) {
    var fileAttachmentCount = this.updateChatSessionUnsentData(
      sessionid,
      value,
      this.ChatSessionUnsentData.UpdateType.AttachmentCount
    );
    return (
      fileAttachmentCount < this.MaxFileAttachments
        ? this.showUploadIcon()
        : this.hideUploadIcon(),
      fileAttachmentCount
    );
  }),
  (FileAttachmentControl.prototype.updateFileAttachmentCountLink = function (
    fileAttachmentCount
  ) {}),
  (FileAttachmentControl.prototype.validateMaxFilesCount = function (
    sessionid,
    selectedFilesCount
  ) {
    return (
      this.getChatSessionUnsentData(sessionid).AttachmentCount +
        selectedFilesCount <=
      this.MaxFileAttachments
    );
  }),
  (FileAttachmentControl.prototype.validateFileAttachments = function () {
    var sessionObject = this.getChatSessionUnsentData(
      this.getActiveChatSessionId()
    );
    return (
      null != sessionObject &&
      null != sessionObject &&
      0 != sessionObject.AttachmentCount &&
      (0 < sessionObject.UploadRequests.length
        ? (this.showFileInProgressErrorMessage(), !1)
        : 0 < sessionObject.Uploadedfiles.length)
    );
  }),
  (FileAttachmentControl.prototype.resetFileAttachments = function (
    sessionid,
    isChatEnded
  ) {
    if (!this.IsEnabled) return !1;
    (null != isChatEnded && null != isChatEnded) || (isChatEnded = !1),
      this.clearChatSessionUnsentData(sessionid, isChatEnded),
      this.showUploadIcon(),
      (document.getElementById(this.Elements.PreviewContainer).innerHTML = "");
  }),
  (FileAttachmentControl.prototype.postFile = function (
    url,
    sessionid,
    data,
    fileGuid,
    filename,
    isSingleFile
  ) {
    var deferred = $.Deferred(),
      req = new XMLHttpRequest();
    return (
      req.open("POST", url, !0),
      (function (sessionid, fileGuid, deferred, that) {
        req.onreadystatechange = function () {
          if (4 === this.readyState)
            if (200 === this.status) {
              var uploadFile = JSON.parse(this.responseText);
              uploadFile.Guid = fileGuid;
              var uploadRequestsCount = (sessionObject =
                that.getChatSessionUnsentData(sessionid)).UploadRequests.length;
              0 <
              (uploadRequest = $.grep(
                sessionObject.UploadRequests,
                function (item) {
                  return item.Guid == fileGuid;
                }
              )).length
                ? (that.updateChatSessionUnsentData(
                    sessionid,
                    uploadFile,
                    that.ChatSessionUnsentData.UpdateType.AddUploadedfile
                  ),
                  that.updateChatSessionUnsentData(
                    sessionid,
                    uploadRequest[0],
                    that.ChatSessionUnsentData.UpdateType.DeleteUploadRequest
                  ),
                  that.showFileThumbnail(sessionid, fileGuid),
                  1 == uploadRequestsCount &&
                    that.hideFileInProgressErrorMessage(),
                  deferred.resolve(sessionid))
                : deferred.reject(sessionid);
            } else {
              var errorMessage = "";
              if (null != this.responseText && "" != this.responseText) {
                var error = JSON.parse(this.responseText);
                deferred.reject(error.Message),
                  (errorMessage =
                    "FileTypeError" == error.Message
                      ? isSingleFile
                        ? that.ErrorMessage.SingleFileTypeError
                        : that.ErrorMessage.MultipleFileTypeError
                      : "FileSizeError" == error.Message
                      ? isSingleFile
                        ? that.ErrorMessage.SingleFileSizeError
                        : that.ErrorMessage.MultipleFileSizeError
                      : isSingleFile
                      ? that.ErrorMessage.SingleFileGeneralError
                      : that.ErrorMessage.MultipleFileGeneralError);
              } else
                errorMessage = isSingleFile
                  ? that.ErrorMessage.SingleFileGeneralError
                  : that.ErrorMessage.MultipleFileGeneralError;
              that.deleteFileThumbnail(
                $('[fileguid="' + fileGuid + '"] .deleteFile')
              );
              var uploadRequest,
                sessionObject = that.getChatSessionUnsentData(sessionid);
              0 <
                (uploadRequest = $.grep(
                  sessionObject.UploadRequests,
                  function (item) {
                    return item.Guid == fileGuid;
                  }
                )).length &&
                that.updateChatSessionUnsentData(
                  sessionid,
                  uploadRequest[0],
                  that.ChatSessionUnsentData.UpdateType.DeleteUploadRequest
                ),
                that.showFileUploadErrorMessage(errorMessage),
                deferred.reject(sessionid);
            }
        };
      })(sessionid, fileGuid, deferred, this),
      (function (fileGuid) {
        req.upload.onprogress = function (event) {
          if (event.lengthComputable) {
            var percentCompleted = Math.trunc(
              (event.loaded / event.total) * 100
            );
            $(
              ".thumbnailCtr[fileGuid='" + fileGuid + "'] .progressIndicator"
            ).text(percentCompleted + "%");
          }
        };
      })(fileGuid),
      (req.onerror = function () {
        deferred.reject(Error("Network Error"));
      }),
      req.send(data),
      (deferred.promise().Guid = fileGuid),
      (deferred.promise().FileName = filename),
      deferred.promise()
    );
  }),
  (FileAttachmentControl.prototype.showFileUploadErrorMessage = function (
    message,
    className
  ) {
    className
      ? $("#divErrorMessage").addClass(className)
      : $("#divErrorMessage").attr("class", "error-msg");
  }),
  (FileAttachmentControl.prototype.hideFileUploadErrorMessage = function (
    className
  ) {
    className
      ? $("#divErrorMessage." + className)
          .hide()
          .removeClass(className)
      : $("#divErrorMessage").hide().attr("class", "error-msg");
  }),
  (FileAttachmentControl.prototype.showFileInProgressErrorMessage =
    function () {}),
  (FileAttachmentControl.prototype.hideFileInProgressErrorMessage =
    function () {}),
  (FileAttachmentControl.prototype.getChatSessionUnsentData = function (
    sessionid
  ) {
    if (null != sessionid && null != sessionid) {
      for (
        var sessionObject = null, i = 0;
        i < this.ChatSessionUnsentData.length;
        ++i
      )
        if (this.ChatSessionUnsentData[i].Sessionid == sessionid) {
          sessionObject = this.ChatSessionUnsentData[i];
          break;
        }
      if (null != sessionObject && null != sessionObject) return sessionObject;
      var newObj = {};
      return (
        (newObj.Sessionid = sessionid),
        (newObj.AttachmentCount = 0),
        (newObj.ChatMessage = ""),
        (newObj.ChatEnded = !1),
        (newObj.Uploadedfiles = []),
        (newObj.UploadRequests = []),
        (newObj.LastFilesSent = []),
        this.ChatSessionUnsentData.push(newObj),
        newObj
      );
    }
  }),
  (FileAttachmentControl.prototype.updateChatSessionUnsentData = function (
    sessionid,
    sessionObject,
    updateType
  ) {
    for (var index = -1, i = 0; i < this.ChatSessionUnsentData.length; ++i)
      if (this.ChatSessionUnsentData[i].Sessionid == sessionid) {
        if (
          ((index = i), updateType == this.ChatSessionUnsentData.UpdateType.All)
        )
          this.ChatSessionUnsentData[i] = sessionObject;
        else if (
          updateType == this.ChatSessionUnsentData.UpdateType.ChatMessage
        )
          this.ChatSessionUnsentData[i].ChatMessage = sessionObject;
        else {
          if (
            updateType == this.ChatSessionUnsentData.UpdateType.AttachmentCount
          )
            return (
              (this.ChatSessionUnsentData[i].AttachmentCount =
                this.ChatSessionUnsentData[i].AttachmentCount + sessionObject),
              this.ChatSessionUnsentData[i].ChatEnded
                ? this.MaxFileAttachments
                : this.ChatSessionUnsentData[i].AttachmentCount
            );
          if (
            updateType == this.ChatSessionUnsentData.UpdateType.AddUploadRequest
          )
            this.ChatSessionUnsentData[i].UploadRequests.push(sessionObject);
          else if (
            updateType ==
            this.ChatSessionUnsentData.UpdateType.DeleteUploadRequest
          ) {
            if (
              -1 <
              (index =
                this.ChatSessionUnsentData[i].UploadRequests.indexOf(
                  sessionObject
                ))
            )
              index = this.ChatSessionUnsentData[i].UploadRequests.splice(
                index,
                1
              );
          } else if (
            updateType == this.ChatSessionUnsentData.UpdateType.AddUploadedfile
          )
            this.ChatSessionUnsentData[i].Uploadedfiles.push(sessionObject);
          else if (
            updateType ==
            this.ChatSessionUnsentData.UpdateType.DeleteUploadedfile
          ) {
            if (
              -1 <
              (index =
                this.ChatSessionUnsentData[i].Uploadedfiles.indexOf(
                  sessionObject
                ))
            )
              index = this.ChatSessionUnsentData[i].Uploadedfiles.splice(
                index,
                1
              );
          }
        }
        break;
      }
    return index;
  }),
  (FileAttachmentControl.prototype.clearChatSessionUnsentData = function (
    sessionid,
    isChatEnded
  ) {
    (null != isChatEnded && null != isChatEnded) || (isChatEnded = !1);
    var sessionObject = this.getChatSessionUnsentData(sessionid);
    null != sessionObject &&
      null != sessionObject &&
      ((sessionObject.AttachmentCount = 0),
      (sessionObject.ChatMessage = ""),
      (sessionObject.ChatEnded = isChatEnded),
      (sessionObject.Uploadedfiles = []),
      (sessionObject.UploadRequests = []),
      (sessionObject.LastFilesSent = []),
      this.updateChatSessionUnsentData(
        sessionid,
        sessionObject,
        this.ChatSessionUnsentData.UpdateType.All
      ));
  }),
  (FileAttachmentControl.prototype.initChatSessionFields = function (
    sessionid
  ) {
    this.preserveLiveChatText(), this.hideFileUploadErrorMessage();
    var sessionObject = this.getChatSessionUnsentData(sessionid);
    if (
      ((this.IsEnabledForCurrentChatSession = !sessionObject.ChatEnded),
      sessionObject.ChatEnded)
    )
      this.disableFileAttachments();
    else {
      var attachmentCount = sessionObject.AttachmentCount;
      if (
        ($("." + this.Elements.PreviewContainer).html(""),
        this.showUploadIcon(),
        "" != sessionObject.ChatMessage
          ? (document.getElementById(this.Elements.LiveChatTextbox).value =
              sessionObject.ChatMessage)
          : (document.getElementById(this.Elements.LiveChatTextbox).value = ""),
        0 < sessionObject.AttachmentCount &&
          0 < sessionObject.Uploadedfiles.length)
      )
        for (var i = 0; i < sessionObject.Uploadedfiles.length; i++)
          this.createFileThumbnail(
            sessionObject.Sessionid,
            sessionObject.Uploadedfiles[i].Guid,
            sessionObject.Uploadedfiles[i],
            this.ThumbnailSourceType.UploadedFile
          );
      if (0 < sessionObject.UploadRequests.length)
        for (i = 0; i < sessionObject.UploadRequests.length; i++) {
          for (
            var index = -1, j = 0;
            j < sessionObject.Uploadedfiles.length;
            ++j
          )
            sessionObject.Uploadedfiles[j].Guid ==
              sessionObject.UploadRequests[i].Guid && (index = j);
          -1 == index &&
            this.createFileThumbnail(
              sessionObject.Sessionid,
              sessionObject.UploadRequests[i].Guid,
              sessionObject.UploadRequests[i],
              this.ThumbnailSourceType.InprogressFile
            );
        }
      sessionObject.UploadRequests.length + sessionObject.Uploadedfiles.length <
      this.MaxFileAttachments
        ? this.showUploadIcon()
        : this.hideUploadIcon(),
        this.updateFileAttachmentCountLink(attachmentCount);
    }
  }),
  (FileAttachmentControl.prototype.showUploadIcon = function () {
    this.IsEnabled && $("#" + this.Elements.UploadIcon).show();
  }),
  (FileAttachmentControl.prototype.hideUploadIcon = function () {
    $("#" + this.Elements.UploadIcon).hide();
  }),
  (FileAttachmentControl.prototype.preserveLiveChatText = function () {
    var sessionid = this.getActiveChatSessionId();
    null != sessionid &&
      null != sessionid &&
      this.updateChatSessionUnsentData(
        sessionid,
        $("#" + this.Elements.LiveChatTextbox).val(),
        this.ChatSessionUnsentData.UpdateType.ChatMessage
      );
  }),
  (FileAttachmentControl.prototype.getFileUploadUrl = function (
    sessionid,
    fileName
  ) {
    return (
      this.SecureReferrer +
      "/api/files/?chatSessionId=" +
      sessionid +
      "&q=" +
      fileName
    );
  }),
  (FileAttachmentControl.prototype.getFileUrl = function (file) {
    return (
      this.fileStorageSecureReferrer +
      file.FileName +
      file.FileSecureAccessToken
    );
  }),
  (FileAttachmentControl.prototype.getThumbnailUrl = function (file) {
    return (
      this.fileStorageSecureReferrer +
      file.ThumbnailFileName +
      file.ThumbnailSecureAccessToken
    );
  }),
  (FileAttachmentControl.prototype.validateFileType = function (
    fileName,
    type
  ) {
    return new RegExp("(.*?).(" + type + ")$").test(fileName.toLowerCase());
  }),
  (FileAttachmentControl.prototype.getFileExtension = function (fileName) {
    return fileName.toLowerCase().split(".").pop();
  }),
  (FileAttachmentControl.prototype.isPdfFile = function (fileExtension) {
    return fileExtension == this.FileExtensionName.Pdf;
  }),
  (FileAttachmentControl.prototype.isTxtFile = function (fileExtension) {
    return fileExtension == this.FileExtensionName.Txt;
  }),
  (FileAttachmentControl.prototype.getActiveChatSessionId = function () {
    return "";
  }),
  (FileAttachmentControl.prototype.disableFileAttachments = function () {
    (this.IsEnabledForCurrentChatSession = !1),
      $("." + this.Elements.PreviewContainer).html(""),
      this.hideUploadIcon();
  }),
  (FileAttachmentControl.prototype.enableFileAttachments = function () {
    this.IsEnabledForCurrentChatSession = !0;
  }),
  (FileAttachmentControl.prototype.getUploadedFileAttachmentsToSend = function (
    sessionId
  ) {
    var sessionObject = this.getChatSessionUnsentData(sessionId);
    return null == sessionObject ||
      null == sessionObject ||
      0 < sessionObject.UploadRequests.length
      ? []
      : ((sessionObject.LastFilesSent = sessionObject.Uploadedfiles),
        sessionObject.Uploadedfiles);
  }),
  (FileAttachmentControl.prototype.escapeQuotes = function (val) {
    return null == val
      ? val
      : val.replace(/"/g, "&#34;").replace(/'/g, "&#39;");
  }),
  (FileAttachmentControl.prototype.createNewGuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (16 * Math.random()) | 0;
        return ("x" == c ? r : (3 & r) | 8).toString(16);
      }
    );
  }),
  (Math.trunc =
    Math.trunc ||
    function (x) {
      return isNaN(x) ? NaN : 0 < x ? Math.floor(x) : Math.ceil(x);
    });
