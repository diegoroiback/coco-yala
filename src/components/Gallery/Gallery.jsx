'use client';

import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import styles from './Style.module.scss'

const Gallery = ({ images, title }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {title && (
          <h2 className={styles.title}>Galería de fotos</h2>
        )}
        <PhotoProvider maskOpacity={0.9}>
          <div className={styles.gallery}>
            {images.map((img, index) => (
              <PhotoView key={index} src={img} className={styles.list}>
                <div className={styles.image}>
                  <Image
                    src={img}
                    alt={`Coco Yala Panamá`}
                    width={400}
                    height={300}
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  )
}

export default Gallery
