// tslint:disable ;
// tslint 忽略下面所有内容
// google地图韩国地图有问题 需要采用遮罩层的方式遮盖原图
// 实现一个方法用来覆盖地图上的遮罩层
// 这个方法可以不单单作为覆盖地图使用

const fixedMap = (leftTop: WindeyMap.LatLng, rightDown: WindeyMap.LatLng, imgSrc: string, map: google.maps.Map) => {
    // let overlay;

    function createOverlay() {

        const bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(leftTop.lat, leftTop.lng), // 左上
            new google.maps.LatLng(rightDown.lat, rightDown.lng), // 右下
        );
        // @ts-ignore
        // overlay = new USGSOverlay(bounds, srcImage, map);
        const usgsOverlay = new USGSOverlay(bounds, imgSrc, map);
    }

    function USGSOverlay(bounds: any, image: any, myMap: any) {

        // @ts-ignore TODO 未知问题
        this.bounds_ = bounds;
        // @ts-ignore
        this.image_ = image;
        // @ts-ignore
        this.map_ = myMap;
        // @ts-ignore
        this.div_ = null;
        // @ts-ignore
        this.setMap(map);
    }

    USGSOverlay.prototype = new google.maps.OverlayView();

    USGSOverlay.prototype.onAdd = function() {

        const div = document.createElement('div');
        div.style.border = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        const img = document.createElement('img');
        img.src = this.image_;
        img.style.width = '100%';
        img.style.height = '100%';
        div.appendChild(img);

        this.div_ = div;

        const panes = this.getPanes();
        panes.overlayImage.appendChild(this.div_);
    };

    USGSOverlay.prototype.draw = function() {

        const overlayProjection = this.getProjection();

        const sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
        const ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
        const div = this.div_;
        div.style.left = sw.x + 'px';
        div.style.top = ne.y + 'px';
        div.style.width = (ne.x - sw.x) + 'px';
        div.style.height = (sw.y - ne.y) + 'px';
    };

    USGSOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
    };

    USGSOverlay.prototype.hide = function() {
        if (this.div_) {
            this.div_.style.visibility = 'hidden';
        }
    };

    USGSOverlay.prototype.show = function() {
        if (this.div_) {
            this.div_.style.visibility = 'visible';
        }
    };

    USGSOverlay.prototype.toggle = function() {
        if (this.div_) {
            if (this.div_.style.visibility === 'hidden') {
                this.show();
            } else {
                this.hide();
            }
        }
    };

    USGSOverlay.prototype.toggleDOM = function() {
        if (this.getMap()) {
            this.setMap(null);
        } else {
            this.setMap(this.map_);
        }
    };
    createOverlay();
};
export default {
    fixedMap,
};

