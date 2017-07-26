require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

//获取图谱香港的数据
let imageDatas = require('../data/imgData.json');

//利用自执行函数，将图片名信息转成URL路径信息
imageDatas = (function getImageURL(imgDataArr) {
  for (let i = 0; i < imgDataArr.length; i++) {
    let singleImgData = imgDataArr[i];
    singleImgData.imgURL = require(`../images/${singleImgData.fileName}`);
    imgDataArr[i] = singleImgData;
  }
  return imgDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
