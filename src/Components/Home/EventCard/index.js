import React, { Component } from 'react'
import {
  DocumentCard, DocumentCardActions,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

var previewProps = {
  previewImages: [
    {
      name: 'Kinect 2017',
      url: 'http://bing.com',
      previewImageSrc: `https://github.com/BVPMOSC/EventInsta/blob/master/public/images/flex1.jpg?raw=true`,
      //iconSrc: `https://scontent.fdel4-1.fna.fbcdn.net/v/t1.0-9/12088470_920074564753438_8716674780463844245_n.jpg?oh=040259c1d249096f09a00e915323589f&oe=5A293EF3`,
      imageFit: ImageFit.cover,
      width: 500,
      height: 200
    }
  ],
}

export default class EventCard extends Component {



  render() {
    return (
      <div>
        <DocumentCard onClickHref='http://bing.com'>
          <DocumentCardPreview { ...previewProps } />
          <div className="ms-font-xl">Kinect 2017</div>

        </DocumentCard>
      </div>
    )
  }
}
