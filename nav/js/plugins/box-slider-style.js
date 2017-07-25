/********************************** the slider Example************************************

      obj.boxSlider({                              paramName                   param
       speed: 500                          //图片变换时间                 毫秒
      , autoScroll: true                   //是否自动轮播                boolean
      , timeout: 1000                      //图片停留时间                毫秒
      , next: '#next'                      //切换下一张图片元素          obj
      , prev: '#prev'                      //切换上一张图片元素          obj
      , pause: '#viewport'                //停止自动轮播开关、元素      obj
      , effect: 'scrollVert3d'            //轮播方式         scrollVert3d(3D垂直翻转)；scrollHorz3d(3D水平翻转)；
                                                            scrollVert(普通垂直滑动)；scrollHorz(普通水平滑动)；
                                                            blindLeft(左到右百叶窗翻转)；blindDown(左到右依次掉落)；
                                                            tile(小块依次闪现);tile3d(小块依次闪现)；fade(淡入淡出)
      , onbefore: switchIndicator             //轮播开始之前运行            function(){}
      , onafter: startTimeIndicator           //轮播结束之后运行            function(){}
    });
 * effectOptions = {   'blindLeft': {blindCount: 15}//图片切分个数
                    , 'blindDown': {blindCount: 15}//图片切分个数
                    , 'tile3d': {tileRows: 6, rowOffset: 80}//图片切分个数
                    , 'tile': {tileRows: 6, rowOffset: 80}//图片切分个数
                  };
 ************************* * by  web  oldZhang 2017-3-11*****************************************/

;(function (w, $, undefined) {
  /****************************** blindsSlideStyle  start***********************************/
  w.jqBoxSlider.registerAnimator('blindDown,blindLeft', (function () {
    var adaptor = {};
    // creates the blinds and sets up the content slider css
    adaptor.initialize = function ($box, $slides, settings) {
      var $wrapper = $(document.createElement('div'))
        , imgSrc = slideImageURL($slides.eq(0))
        , fromLeft
        , i = 0;
        
      settings.blindCount || (settings.blindCount = 10);
      settings.blindSpeed = settings.speed;
      settings.blindintv = settings.speed / settings.blindCount;
      settings.speed += settings.blindintv * settings.blindCount;
      settings.blindSize = $box.width() / settings.blindCount;

      this._cacheOriginalCSS($box, 'box', settings);
      this._cacheOriginalCSS($slides, 'slides', settings);
      for (; i < settings.blindCount; ++i) {
        fromLeft = (i * settings.blindSize);
        $(document.createElement('div'))
          .css({
              position: 'absolute'
            , top: '0px'
            , left: i*10 +"%"
            , width: '10%'
            , height: '100%'
            , backgroundImage: 'url(' + imgSrc + ')'
            , backgroundPosition: - i*100 + '% '+ '0'
            , backgroundSize: '1000% 100%'//为了使背景图自适应轮播元素尺寸
          })
          .appendTo($wrapper);
      }
      $box.css('position', 'relative');
      //$box.css({height: $slides.css('height'), overflow: 'hidden'});
      //暂时不允许改变盒子高度
      $slides.css({position: 'absolute', top: 0, left: 0});
      $wrapper
        .css({
            position: 'absolute'
          , top: '0px'
          , left: '0px'
          , width: '100%'
          , height: '100%'
          //, zIndex: 2
        })
        .appendTo($box);

      settings.$blinds = $wrapper;
      settings._slideFilter = filterOutBlinds;

    };

    // moves the next slide behind the wall of blinds then 
    // animates the binds out of view
    adaptor.transition = function (settings) {
      var height = settings.$box.height()
        , $blinds = settings.$blinds.children();

      settings.$slides.hide();
      settings.$nextSlide.show();

      $blinds.each(function (i, el) {(function () {
        var delay = settings.blindintv * i
          , $el = $(el);
          
        setTimeout(function () {
          $el.animate(animateCSS(settings), settings.blindSpeed);
        }, delay);
      }());});
      
      setTimeout(function () {
        $blinds.css(resetCSS(settings));
      }, settings.speed);
    };
    
    // removes the blinds and resets plugin settings and css
    adaptor.destroy = function ($box, settings) {
      if(settings.$blinds){
        settings.$blinds.remove();
      }
      $box.css(settings.origCSS.box);
      $box.children().css(settings.origCSS.slides);
      
      settings.speed = settings.blindSpeed;
      delete settings.blindCount;
      delete settings.blindSpeed;
      delete settings.blindintv;
      delete settings.$blinds;
      delete settings.blindSize;
    };
    
    // filters the blinds wrapper out of the content slides
    var filterOutBlinds = function (index, settings) {
      return this.get(index) !== settings.$blinds.get(0);
    };
    
    // locate the slides image and get it's url
    var slideImageURL = function ($slide) {
      return $slide.attr('src') || $slide.find('img').attr('src');
    };
    
    // returns the animation css for the blind effec
    var animateCSS = function (settings) {
      switch (settings.effect) {
        case 'blindDown': return {top: '100%'};
        case 'blindLeft': return {width: '0%'};
      }
    };
    
    var resetCSS = function (settings) {
      var css = {backgroundImage: 'url('+slideImageURL(settings.$nextSlide)+')'};
      
      switch (settings.effect) {
        case 'blindDown':
          css.top = '0';
          break;
        case 'blindLeft':
          css.width = '10%';
          break;
      }
      
      return css;
    };

    return adaptor;

  }()));
  /****************************** blindsSlideStyle  start***********************************/

/*******************************fadeSlideStyle  start*************************************/
  w.jqBoxSlider.registerAnimator('fade', (function () {

    var adaptor = {};

    // setup slide and box css
    adaptor.initialize = function ($box, $slides, settings) {
      adaptor._cacheOriginalCSS($box, 'box', settings);
      adaptor._cacheOriginalCSS($slides, 'slides', settings);

      if ('static inherit'.indexOf($box.css('position')) !== -1) {
        $box.css('position', 'relative');
      }
      $box.css({height: $slides.eq(0).height(), overflow: 'hidden'});
      //暂时不允许改变盒子高度
      //$box.css({ overflow: 'hidden'});
      $slides
          .css({ position: 'absolute', top: 0, left: 0 })
          .filter(':gt(0)').hide();
    };

    // fade current out and next in
    adaptor.transition = function (settings) {
      settings.$nextSlide.fadeIn(settings.speed);
      settings.$currSlide.fadeOut(settings.speed);
    };

    // reset the original css
    adaptor.destroy = function ($box, settings) {
      $box.children().css(settings.origCSS.slides);
      $box.css(settings.origCSS.box);
    };

    return adaptor;

  }()));
  /************************************fadeSlideStyle  end*******************************/

  /**********************************tilsSlideStyle  start********************************/
  w.jqBoxSlider.registerAnimator('tile3d,tile', (function () {

    var adaptor = {}
        , supports3d = true
        , vendorPrefix = '';

    adaptor.configure = function (can3D, prefix) {
      supports3d = can3D;
      vendorPrefix = prefix;
    };

    adaptor.initialize = function ($box, $slides, settings) {
      var rows = (settings.tileRows || 5)
          , side = $box.height() / rows  //120
          //, cols = Math.ceil($box.width() / side) //7
          , cols = 7
          , imgURL = slideImageURL($slides.eq(0))
          , $wrapper = $(document.createElement('div'))
          , fromLeft = 0
          , fromTop = 0
          , i = 0
          , j = 0,theTop = 0,theLeft;

      // set up the tile grid with background images
      for (; i < 5; ++i) {
        fromTop = i/5 +"%";//-------------120 * 5
        //theTop  = i/4+"%";
        for (j = 0; j < 8; ++j) {
          //theLeft = (j*100/7).toFixed(2) +2.5*j+"%";
          fromLeft = j * side;//-------------120 * 7
          $wrapper.append(createTile({
              fromTop: i*20+"%"       //-------------120 * 5
            , fromLeft: (j*100/8) +"%" //-------------120 * 7
            , imgURL: imgURL
            , side: "20%"          //-------------120
            , theLeft : (j*100/8+j*1.75) +"%"
            , theTop : i*25+"%"
            , supports3d: supports3d && settings.effect === 'tile3d'
          }));
        }
      }
      // cache css and setup tile wrapper
      this._cacheOriginalCSS($box, 'box', settings);
      $wrapper.css({position: 'absolute', top: 0, left: 0});
      $box.css('position', 'relative').append($wrapper);
      // $slides.hide();
      if($slides.find('.zm-component-box1').length>1){
            $slides.find('.zm-component-box1').css('zIndex',0)
        }
      // cache effect settings for the transition
      settings.tileGrid = {x: 8, y: 5};
      settings.$tileWrapper = $wrapper;
      settings._slideFilter = function (index, settings) {
        return this.get(index) !== settings.$tileWrapper.get(0);
      };
    };
      
    adaptor.transition = function (settings) {
        for(var x = 0;x<settings.$slides.length;x++){
          if(settings.nextIndex==x){
            for(var y = 0;y<settings.$slides.eq(x).find('.zm-component-box1').length;y++){
                settings.$slides.eq(x).children('.zm-component-box1').eq(y).fadeIn().css(
                    'zIndex', settings.$slides.eq(x).find('.zm-component-box1').eq(y).attr('data-zm-index')
                );
            }
          }else {
              settings.$slides.eq(x).children('.zm-component-box1').fadeOut().css('zIndex',0)
          }
        }

      var $tiles = settings.$tileWrapper.find('.bs-tile')
          , rowIntv = settings.rowOffset || 100
          , tileIntv = (
          (settings.speed - rowIntv * (settings.tileGrid.y - 1)) /
          settings.tileGrid.x
         )
          , imgSrc = slideImageURL(settings.$nextSlide)
          , nextFace = settings.nextFace || 'back'
          , faceClass = '.bs-tile-face-' + nextFace
          , ret = {}
          , i = 0
          , angle;

      // select the correct face to flip
      if (nextFace === 'back') {
        ret.nextFace = 'front';
        angle = 180;
      }
      else {
        ret.nextFace = 'back';
        angle = 0;
      }
       
      $tiles.find(faceClass).css('background-image', 'url(' + imgSrc + ')');
      // first run through each row and set a timeout to offset the start of
      // that rows tiles animating
      for (; i < settings.tileGrid.y; ++i) {
        (function () {
          var j = rowStart = i * settings.tileGrid.x
              , rowEnd = rowStart + settings.tileGrid.x
              , rowTimeout = i * rowIntv
              , timerIndex = 0;

          setTimeout(function () {
            // animate each tile in the current row
            for (; j < rowEnd; ++j) {
              (function () {
                var tileTimeout =  timerIndex * tileIntv
                    , $tile = $tiles.eq(j);

                setTimeout(function () {
                  if (supports3d && settings.effect === 'tile3d') {
                    $tile.css(
                        vendorPrefix + 'transform'
                        , 'rotate3d(0,1,0,' + angle + 'deg)'
                    );
                  }
                  else {
                    $tile.find('.bs-tile-face-' + ret.nextFace).fadeOut(100, function () {
                      $tile.find(faceClass).fadeIn(300);
                    });
                  }
                }, tileTimeout);
              }());

              timerIndex += 1;
            }
          }, rowTimeout);
        }());
      }

      return ret;
    };

    // reset effect css and remove tile grid
    adaptor.destroy = function ($box, settings) {
      settings.$tileWrapper.remove();
      // show the hidden tiles
      $box.children().show();

      if (settings.origCSS) {
        $box.css(settings.origCSS.box);
        delete settings.tileRows;
        delete settings.rowOffset;
        delete settings.tileGrid;
        delete settings.$tileWrapper;
        delete settings._slideFilter;
      }
    };

    // locate the slides image and get it's url
    var slideImageURL = function ($slide) {
      return $slide.attr('src') || $slide.find('img').attr('src');
    };

    // creates a tile section
    var createTile = function (opts) {
      var $tileHolder = $(document.createElement('div'))
          , $tile = $(document.createElement('div'))
          , $front = $(document.createElement('div'))
          , $back = $(document.createElement('div'));

      // All browser styling

      $tileHolder.addClass('thePieces').css({
              position: 'absolute'
            , top: opts.fromTop
            , left: opts.fromLeft
            , width: (100/8)+"%"
            , height: opts.side
          });

      $tile.addClass('bs-tile').css({width: "100%", height: "100%"}).appendTo($tileHolder);

      $back.addClass('bs-tile-face-back').css({
        backgroundPosition: opts.theLeft + ' ' + opts.theTop,
        backgroundSize:"800% 500%"
      });
      for(var i=0;i<5;i++){
      }
      $front.addClass('bs-tile-face-front').css('backgroundImage', 'url(' + opts.imgURL + ')').add($back)
          .css({
              width: "100%"
            , height: "100%"
            , backgroundPosition: opts.theLeft + ' ' + opts.theTop
            , backgroundSize:"800% 500%"
            , position: 'absolute'
            , top: 0
            , left: 0
            , border:''
          }).appendTo($tile);

      // 3D and non supported styling
      if (opts.supports3d) {
        $tileHolder.css(vendorPrefix + 'perspective', 400);
        $tile.css(vendorPrefix + 'transform-style', 'preserve-3d')
            .css(vendorPrefix + 'transition', vendorPrefix + 'transform .4s');
        $front.add($back).css(vendorPrefix + 'backface-visibility', 'hidden');
        $back.css(vendorPrefix + 'transform', 'rotateY(180deg)');
      }else {
        $back.css('display', 'none');
      }
      return $tileHolder;
    };
    return adaptor;

  }()));
  /**********************************tilesSlideStyle  end********************************/

  /**********************************scrollSlideStyle  start********************************/
  w.jqBoxSlider.registerAnimator('scrollVert,scrollHorz', (function () {

    var adaptor = {};

    // setup slide and box css
    adaptor.initialize = function ($box, $slides, settings) {
      var width = '100%'
          , height = '100%';
      //var width = $box.width(), height = $slides.eq(0).height();
      // cache original css for reset and destroy
      adaptor._cacheOriginalCSS($box, 'box', settings);
      adaptor._cacheOriginalCSS($slides, 'slides', settings);

      if ('static inherit'.indexOf($box.css('position')) !== -1) {
        $box.css('position', 'relative');
      }

      // fix the box height and stop slide oveflow showing
      $box.css({height: height, overflow: 'hidden'});
      //暂时不允许改变盒子高度
      //$box.css({overflow: 'hidden'});
      $slides.css({ // ensure all slides are same size and positioned
            position: 'absolute'
            , top: 0
            , left: 0
            , width: width
            , height: height
          })
          .filter(':gt(0)').hide(); // hide all but first slide
    };

    // slide current out of view and next into view
    adaptor.transition = function (settings) {
      var offsets = calcPositions(
          settings.$box
          , settings.effect === 'scrollVert'
          , settings.reverse
      );

      settings.$nextSlide // animate into position
          .css($.extend(offsets.next, {display: 'block'}))
          .animate(offsets.anim, settings.speed);
      settings.$currSlide.animate( // animate out of position
          offsets.curr
          , settings.speed
      );
    };

    // reset the original css
    adaptor.destroy = function ($box, settings) {
      $box.children().css(settings.origCSS.slides);
      $box.css(settings.origCSS.box);
    };

    // gets the next and current slide positions for the animation
    var calcPositions = function ($box, isVert, reverse) {
      var offs = { curr: {}, next: {} };

      if (isVert) {
        offs.next.top = (reverse ? $box.height() : -$box.height());
        offs.curr.top = -parseInt(offs.next.top, 10);
        offs.anim = {top: '0'};
      }
      else {
        offs.next.left = (reverse ? -$box.width() : $box.width());
        offs.curr.left = -parseInt(offs.next.left, 10);
        offs.anim = {left: '0'};
      }

      return offs;
    };

    return adaptor;

  }()));
  /**********************************scrollSlideStyle  end********************************/

  /**********************************scroll3DSlideStyle  start********************************/
  w.jqBoxSlider.registerAnimator('scrollVert3d,scrollHorz3d', (function () {

    var adaptor = {}
        , supports3D = false
        , vendorPrefix = '';

    // set local flags for 3D support and css vendor prefix
    adaptor.configure = function (can3D, prefix) {
      supports3D = can3D;
      vendorPrefix = prefix;
    };

    // sets the box and slides initial state via css
    adaptor.initialize = function ($box, $slides, settings) {
      var $parent = $box.parent()
          , width = $parent.innerWidth()
          , height = $parent.innerHeight()
          //, height = $box.find("img").height()
          , positioning = {
        position: 'absolute'
        , top: 0
        , left: 0
      };
      $slides.height(height);//try to change the $slides.height by  oldZahgn
      //console.log($parent.innerHeight()+"***"+height+"***"+$slides.height());
      // cache original css
      adaptor._cacheOriginalCSS($box, 'box', settings, [
        vendorPrefix + 'transform'
        , vendorPrefix + 'transition'
        , vendorPrefix + 'transform-style'
      ]);
      adaptor._cacheOriginalCSS($slides, 'slides', settings, [
        vendorPrefix + 'transform'
      ]);
      adaptor._cacheOriginalCSS($parent, 'viewport', settings, [
        vendorPrefix + 'perspective'
      ]);

      // apply new css
      $slides.css(positioning);
      $box.css($.extend(positioning, { width: width, height: height }));

      // ensure parent is positioned to hold the box
      if ('static inherit'.indexOf($parent.css('position')) !== -1) {
        $parent.css('position', 'relative');
      }

      if (supports3D) {
        // set the Z axis translation amount on the settings for this box
        settings.translateZ = settings.effect === 'scrollVert3d' ? height / 2 : width / 2;
        settings.bsangle = 0;

        // set the parent as the 3D viewport
        $parent.css(vendorPrefix + 'perspective', settings.perspective);
        $parent.css('overflow', 'visible');

        // apply transforms before transition to stop initial animation
        $box.css(vendorPrefix + 'transform-style', 'preserve-3d');
        $box.css(
            vendorPrefix + 'transform'
            , 'translate3d(0, 0, -' + settings.translateZ + 'px)'
        );

        // set front slide
        $slides.eq(0).css(
            vendorPrefix + 'transform'
            , 'rotate3d(0, 1, 0, 0deg) translate3d(0, 0, ' +
            settings.translateZ + 'px)'
        );

        // wait then apply transition for box rotation
        setTimeout(function () { adaptor.reset($box, settings); }, 10);
      }
      else { // using fade hide all but first slide
        $slides.filter(':gt(0)').hide();
      }
    };

    // update the settings on an option change
    adaptor.reset = function ($box, settings) {
      var speed = (settings.speed / 1000) + 's';

      $box.css(vendorPrefix + 'transition', vendorPrefix +'transform '+ speed);
    };

    // moves the slider to the next, prev or 'index' slide
    adaptor.transition = function (settings) {
      var angle = settings.bsangle + (settings.reverse ? 90 : -90)
          , isVert = settings.effect === 'scrollVert3d';

      if (!supports3D) { // no 3D support just use a basic fade transition
        settings.$slides.filter(function (index) {
          return settings.currIndex !== index; }
        ).hide();
        settings.$currSlide.fadeOut(settings.speed);
        settings.$nextSlide.fadeIn(settings.speed);
      }
      else {
        // correct angle if going from prev to next or vice versa
        if (angle === 0) {
          angle = settings.reverse ? 360 : -360;
        }

        settings.$currSlide.css('z-index', 1);
        settings.$slides // remove transform from all slides except current front face
            .filter(function (index) { return settings.currIndex !== index;})
            .css(vendorPrefix + 'transform', 'none')
            .css('display', 'none');
        settings.$nextSlide.css( // move next slide to the effective next face
            vendorPrefix + 'transform'
            , rotation(angle, isVert) + ' translate3d(0, 0,' + settings.translateZ + 'px)'
        ).css({display: 'block', zIndex: 2});

        settings.$box.css( // rotate the box to show next face
            vendorPrefix + 'transform'
            , 'translate3d(0, 0, -' + settings.translateZ + 'px) rotate3d(' +
            (isVert ? '1, 0, 0, ' : '0, 1, 0, ') + angle + 'deg)'
        );

        // the box has gone full circle so start again from 0deg
        if (Math.abs(angle) === 360) {
          settings.$box.css(
              vendorPrefix + 'transform'
              , 'translate3d(0, 0, -' + settings.translateZ + 'px)'
          );
          angle = 0;
        }

        return {bsangle: angle};
      }
    };

    // just resets the box and slides to their original css
    adaptor.destroy = function ($box, settings) {
      var $slides = $box.children()
          , $parent = $box.parent();

      if (settings.origCSS) {
        $box.css(settings.origCSS.box);
        $slides.css(settings.origCSS.slides);
        $parent.css(settings.origCSS.viewport);
        delete settings.bsangle;
        delete settings.translateZ;
      }
    };

    // returns the correct face rotation based on the box's rotated angle
    var rotation = function (angle, isVert) {
      switch (angle) {
        case 360: case -360: return 'rotate3d(0, 1, 0, 0deg)'; // front
        case 90:  case -270: return 'rotate3d(' + (isVert ? '1, 0, 0,' : '0, 1, 0,') + ' -90deg)';
        // bottom / left side
        case 180: case -180: return 'rotate3d(' + (isVert ? '1, 0, 0,' : '0, 1, 0,') + ' 180deg)';
        // back
        case 270: case -90:  return 'rotate3d(' + (isVert ? '1, 0, 0,' : '0, 1, 0,') + ' 90deg)';
        // top / right side
      }
    };

    return adaptor;

  }()));
  /**********************************scroll3DSlideStyle  end********************************/

  /**********************************carousel3DSlideStyle  start********************************/
  //暂时没有此功能
  //w.jqBoxSlider.registerAnimator('carousel3d', (function () {
  //  var adaptor = {}
  //      , vp = '';
  //
  //  adaptor.configure = function (has3d, prefix) {
  //    vp = prefix
  //  };
  //
  //  adaptor.initialize = function ($box, $slides, settings) {
  //    $box
  //    .css(vp + 'transform-style', 'preserve-3d')
  //    .css(vp + 'perspective', settings.perspective || 1000)
  //    .css({position: 'absolute', top: '0px', left: '0px', width: $slides.width(), height: $slides.height()})
  //    .parent().css({overflow: 'visible', position: 'relative'});
  //    $slides.css({position: 'absolute', top: '0px', left: '0px'});
  //
  //    $slides.each(function (i, el) {
  //      var $s = $(el);
  //
  //      $s.css(
  //          vp + 'transform'
  //          , 'translate3d(' + (i === 0 ? 0 : ($box.width() / 2) + i * 50) + 'px,0px,'
    //                         + (i === 0 ? 0 : -$box.height() * 0.5) + 'px)+' '
    //                         +  rotate3d(0,1,0,' + (i === 0 ? 0 : -75 + i * 5) + 'deg)'
  //      );
  //    });
  //  };
  //
  //  return adaptor;
  //
  //}()));
  /**********************************carousel3DSlideStyle  end********************************/

  /**********************************extendSlideStyle  start********************************/
  w.jqBoxSlider.registerAnimator('', (function () {

    var adaptor = {};

    adaptor.configure = function (can3D, prefix) {};

    adaptor.initialize = function ($box, $slides, settings) {};

    adaptor.reset = function ($box, settings) {};

    adaptor.transition = function (settings) {};

    adaptor.destroy = function ($box, settings) {};

    return adaptor;

  }()));
  /**********************************extendSlideStyle  end********************************/
}(window, jQuery || Zepto));
