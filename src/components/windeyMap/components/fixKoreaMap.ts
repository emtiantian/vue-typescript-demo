// google地图韩国地图有问题 需要采用遮罩层的方式遮盖原图

const fixedMap = () => {
    // let overlay;

    function createOverlay() {

        let bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(56.339, 123.72),//左上
            new google.maps.LatLng(38.84, 132.3)//右下
        );

        let srcImage = 'static/pre/common/images/overmap.png';

        // @ts-ignore
        // overlay = new USGSOverlay(bounds, srcImage, map);
        new USGSOverlay(bounds, srcImage, map);
    }

    function USGSOverlay(bounds: any, image: any, map: any) {

        // @ts-ignore
        this.bounds_ = bounds;
        // @ts-ignore
        this.image_ = image;
        // @ts-ignore
        this.map_ = map;
        // @ts-ignore
        this.div_ = null;
        // @ts-ignore
        this.setMap(map);
    }

    USGSOverlay.prototype = new google.maps.OverlayView();

    USGSOverlay.prototype.onAdd = function () {

        let div = document.createElement('div');
        div.style.border = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        var img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        div.appendChild(img);

        this.div_ = div;

        var panes = this.getPanes();
        panes.overlayImage.appendChild(this.div_);
    };

    USGSOverlay.prototype.draw = function () {

        let overlayProjection = this.getProjection();

        let sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        let ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
        let div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
    };

    USGSOverlay.prototype.onRemove = function () {
        this.div_.parentNode.removeChild(this.div_);
    };

    USGSOverlay.prototype.hide = function () {
        if (this.div_) {
            this.div_.style.visibility = 'hidden';
        }
    };

    USGSOverlay.prototype.show = function () {
        if (this.div_) {
            this.div_.style.visibility = 'visible';
        }
    };

    USGSOverlay.prototype.toggle = function () {
        if (this.div_) {
            if (this.div_.style.visibility === 'hidden') {
                this.show();
            } else {
                this.hide();
            }
        }
    };

    USGSOverlay.prototype.toggleDOM = function () {
        if (this.getMap()) {
            this.setMap(null);
        } else {
            this.setMap(this.map_);
        }
    };
    createOverlay();
};
