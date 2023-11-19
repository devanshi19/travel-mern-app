import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./ImageGallery.css"
import { galleryimg1, galleryimg2, galleryimg3, galleryimg4, galleryimg5, galleryimg6, galleryimg7, galleryimg8 } from "../../Utils/images";


const ImageGallery = () => {
    const imageObject = [

        {
            src: galleryimg2.src,
            alt: galleryimg2.name
        },
        {
            src: galleryimg3.src,
            alt: galleryimg3.name
        },
        {
            src: galleryimg1.src,
            alt: galleryimg1.name
        },
        {
            src: galleryimg4.src,
            alt: galleryimg4.name
        },

        {
            src: galleryimg7.src,
            alt: galleryimg7.name
        },
        {
            src: galleryimg5.src,
            alt: galleryimg5.name
        },
        {
            src: galleryimg6.src,
            alt: galleryimg6.name
        },
        {
            src: galleryimg8.src,
            alt: galleryimg8.name
        }
    ]

    return (
        <div className="image-gallery-wrap" id="imageGallery">
            <div className="gallery-heading">
                <hr />
                <h2> Visit Our Cutomer Tour Gallery</h2>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4, 1200: 5 }}
            >
                <Masonry gutter="5px" >
                    {imageObject.map((image, i) => {
                        return (
                            <div className="image-container">
                                <img key={i} src={image.src} alt={image.alt} />
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry >
        </div>
    )
}

export default ImageGallery;