import React from 'react';
import store from '../../../img/store/perfumes_shop.jpg'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className="about-container">
      <article className="mt-5">
        <h3 className="text-center title">About us</h3>
        <div className="img-style">
          <img src={store} alt="" />
        </div>
        <p className="text-center mt-3">
          The Perfume Shop is the UK’s largest specialist fragrance retailer
          with 215 stores across the UK & Ireland, selling all major designer
          fragrance brands, classic and celebrity perfumes, aftershaves and body
          products with unrivalled expertise at value for money prices.
        </p>
      </article>
      <article className=" text-center">
        <h3 className="title">Our Mission</h3>
        <p className="font-size">
          <b>
            To share our genuine passion for perfume & people and offer the most
            knowledgeable fragrance expertise on the high street.
          </b>
        </p>
      </article>
      <article className="  text-center">
        <h3 className="title">Our History</h3>
        <p>
          Founded in 1992, The Perfume Shop set out with the simple idea of
          making luxury perfume brands accessible to everyone at an affordable
          price. With the first store openings in Birmingham, Belfast & Milton
          Keynes, The Perfume Shop developed a genuine passion for delighting
          customers with expert perfume knowledge and the highest customer
          service standards which remain at the forefront of everything the
          brand stands for today. In 2005 The Perfume Shop was acquired by the
          world's largest international health and beauty retailer A.S Watson -
          known in 25 markets, they opened their 15,000th store in March 2019.
          Find out more about our history and our parent company.
        </p>
      </article>
      <article className="  text-center">
        <h3 className="title">Our Expertise</h3>
        <p>
          We are the leading perfume experts in the UK. You can be sure that you
          are in the best place when making a purchase at The Perfume Shop. We
          have trained and developed the most knowledgeable team of sales
          advisors in the perfume industry, proudly boasting the largest number
          of industry recognised CFSS (Certified Fragrance Sales Specialist)
          graduates in the UK. To further showcase our dedication to fragrance
          expertise, we recently established our own innovative programme, "The
          Perfume School”, so that you can always have confidence in our high
          quality, unbiased advice every time you shop.
        </p>
      </article>
    </div>
  );
};

export default AboutUs;