AFRAME.registerComponent('play-on-click', {
    init: function() {
        this.onclick = this.onClick.bind(this);
    },

    play: function() {
        window.addEventListener('click', this.onClick);
    },

    pause: function() {
        window.addEventListener('click', this.onClick);
    },

    onClick: function(e) {
        let videoEl = this.el.getAttribute('material').src;
        if (!videoEl) {
            return;
        }
        this.el.object3D.visible = true;
        videoEl.play();
    }
})