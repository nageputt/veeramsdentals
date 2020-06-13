import React, { Component } from "react";
import AnimatedSlider from "react-animated-slider";
import Slider from "react-slick";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "react-animated-slider/build/horizontal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimony.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const content = [
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
  {
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    description:
      "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
  },
];

class Testimony extends Component {
  render() {
    const params = {
      loop: true,
      slidesPerView: 3,
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      spaceBetween: 30,
    };
    return (
      <div
        className="review-div"
        style={{
          backgroundImage: `URL(
            "https://image3.jdomni.in/banner/29082019/F5/CE/A9/F46CE66CB2F89314BA8C760AD2_1567053802539.webp"
          )`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundColor: `rgba(255, 255, 255, 0.85)`,
        }}
      >
        <div className="testimony-inner">
          <div className="testimony-header">Testimony</div>
          <div className="testimony-slider">
            <Swiper {...params}>
              {content.map((item, index) => (
                <div className="swiper-card">
                  <Card className="review-card">
                    <CardHeader
                      className="review-card-header"
                      avatar={<Avatar src={item.userProfile}></Avatar>}
                      title={item.user}
                      subheader="September 14, 2016"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimony;
