var ON_ADS_STARTED = 0;
var ON_ADS_FINISHED = 1;
var ON_ADS_ERROR = 2;

var ON_BANNER_RENDERED = 3;
var ON_BANNER_ERROR = 4;

var BANNER_LEADERBOARD = "leaderboard";
var BANNER_MEDIUM = "medium";
var BANNER_MOBILE = "mobile";

function CCrazyApiManager() {
    var _bGamePlayStart;
    var _bLeaderboardBannerActive;
    var _bMediumBannerActive;
    var _bMobileBannerActive;

    var _aCbCompleted;
    var _aCbOwner;

    var _oLoading;

    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _bLeaderboardBannerActive = false;
        _bMediumBannerActive = false;
        _bMobileBannerActive = false;

        _bGamePlayStart = false;

        /*
        _oLoading = new createjs.Container();
        _oLoading.on("click", function(){}, this);

        var oBG = new createjs.Shape();
        oBG.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oLoading.addChild(oBG);
        */
    };

    this.unload = function() {
        this._removeEventListener();
    };

    this.setGamePlayStart = function(bVal) {
        if (bVal && !_bGamePlayStart) {
            _bGamePlayStart = true;
        } else if (!bVal && _bGamePlayStart) {
            _bGamePlayStart = false;
        }
    };

    this.setHappyTime = function() {};

    this.inviteLink = function(szRoomID, szPass) {
        const linkToShare = "https://www.solitaireparadise.com/games_list/uno-online.html";
        return linkToShare;
    };

    this.showLoadingPanel = function() {};

    this.hideLoadingPanel = function() {};

    this.showMidAds = function() {};

    this.showRewardedAds = function() {};

    this.showLeaderboardBanner = function() {};

    this.hideLeaderboardBanner = function() {};

    this.showMediumBanner = function() {};

    this.hideMediumBanner = function() {};

    this.showMobileBanner = function() {};

    this.hideMobileBanner = function() {};

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this._initListener = function() {};

    this._removeListener = function() {};

    this.adStarted = function() {};

    this.adFinished = function() {};

    this.adError = function() {};

    this.bannerRendered = function(evt) {};

    this.bannerError = function(evt) {};

    this._init();
}