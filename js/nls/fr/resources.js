﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(({
    map: {
        error: "@fr@ Unable to create map",
        zoomInTooltip: "@fr@ Zoom In",
        zoomOutTooltip: "@fr@ Zoom Out",
        geolocationTooltip: "@fr@ Geolocation"
    },
    main: {
        noGroup: "@fr@ No Group configured"
    },
    signin: {
        guestSigninText: "@fr@ Proceed as Guest",
        signinOptionsText: "@fr@ Sign in with:",
        noGroupNameText: "@fr@ Please sign in",
        guestLoginTooltip: "@fr@ Sign in as a guest",
        facebookLoginTooltip: "@fr@ Sign in with Facebook",
        twitterLoginTooltip: "@fr@ Sign in with Twitter",
        googlePlusLoginTooltip: "@fr@ Sign in with Google+",
        agolLoginTooltip: "@fr@ Sign in with ArcGIS",
        signInTooltip: "@fr@ Sign In",
        signOutTooltip: "@fr@ Sign Out"
    },
    webMapList: {
        owner: "@fr@ Owner",
        created: "@fr@ Created",
        modified: "@fr@ Modified",
        description: "@fr@ Description",
        snippet: "@fr@ Summary",
        licenseInfo: "@fr@ Access and use constraints",
        accessInformation: "@fr@ Credits",
        tags: "@fr@ Tags",
        numViews: "@fr@ Number of views",
        avgRating: "@fr@ Rating",
        noWebMapInGroup: "@fr@ Configured group is invalid or no items have been shared with this group yet.",
        infoBtnToolTip: "@fr@ Map Information"
    },
    issueWall: {
        noResultsFound: "@fr@ No reports found in the current map area"
    },
    mobileMenu: {
        home: "@fr@ Home",
        myIssuesView: "@fr@ My Issues",
        mapView: "@fr@ Map View",
        listView: "@fr@ List View",
        reportIt: "@fr@ Report It",
        signIn: "@fr@ Sign In",
        signOut: "@fr@ Sign Out",
        loggedInAs: "@fr@ Signed in as"
    },
    geoform: {
        enterInformation: "@fr@ 1. Enter Information",
        selectAttachments: "@fr@ Attachments",
        selectFileText: "@fr@ Select File",
        enterLocation: "@fr@ 2. Select Location",
        completeForm: "@fr@ 3. Complete Form",
        reportItButton: "@fr@ Report It",
        requiredField: "@fr@ (required)",
        selectDefaultText: "@fr@ Select&hellip;",
        invalidInputValue: "@fr@ Please enter valid value.",
        noFieldsConfiguredMessage: "@fr@ Layer fields are not configured to capture data",
        invalidSmallNumber: "@fr@ Please enter valid ${openStrong}integer${closeStrong} value between -32768 and 32767.",
        invalidNumber: "@fr@ Please enter valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.",
        invalidFloat: "@fr@ Please enter valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 ",
        invalidDouble: "@fr@ Please enter valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308",
        requiredFields: "@fr@ Please enter all the required fields",
        selectLocation: "@fr@ Please select a location for your submission.",
        numericRangeHintMessage: "@fr@ ${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}",
        dateRangeHintMessage: "@fr@ ${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}",
        errorsInApplyEdits: "@fr@ Issue could not be reported.",
        attachmentSelectedMsg: "@fr@ Attachment(s) selected",
        attachmentUploadStatus: "@fr@ ${failed} of ${total} attachment(s) failed to upload.",
        selectLocationTitleText: "@fr@ (Tap/click on map to select location)",
        geoLocationError: "@fr@ Current location not available",
        geoLocationOutOfExtent: "@fr@ Current location is out of basemap extent",
        geoformTooltip: "@fr@ Report It"
    },
    locator: {
        addressText: "@fr@ Address:",
        usngText: "@fr@ USNG",
        mgrsText: "@fr@ MGRS",
        latLongText: "@fr@ Latitude/Longitude",
        invalidSearch: "@fr@ No results found",
        locatorPlaceholder: "@fr@ Enter address to search",
        locationOutOfExtent: "@fr@ Located address is out of basemap extent"
    },
    myIssues: {
        title: "@fr@ My Reports",
        myIssuesTooltip: "@fr@ My Reports",
        noResultsFound: "@fr@ No reports found"
    },
    comment: {
        errorInSubmittingComment: "@fr@ Comment could not be submitted.",
        emptyCommentMessage: "@fr@ Please enter comment.",
        placeHolderText: "@fr@ Type a comment",
        noCommentsAvailableText: "@fr@ No comments available",
        remainingTextCount: "@fr@ ${0} character(s) remain",
        showNoText: "@fr@ No"
    },
    issueDetailsHelper: {
        likeTooltip: "@fr@ Like",
        commentTooltip: "@fr@ Comment",
        viewOnMapTooltip: "@fr@ View on Map",
        link: "@fr@ Link",
        photoAttachmentHeader: "@fr@ Photo",
        votesUpdateFailure: "@fr@ Unable to update"
    }
}));
