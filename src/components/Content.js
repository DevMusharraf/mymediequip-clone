import React from "react";
import "./content.css";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <div className="row d-flex">
            <span className="banner-title">
              Empower Your Health Journey Monitor Blood Pressure Like a Pro!
            </span>
            <p className="banner-detail">
              Precision measurements, advanced technology. Take control of your
              health with accurate blood pressure monitoring for informed
              decisions and optimal well-being
            </p>
            <button className="buy-product">Buy Product</button>
          </div>
          <div className="ad">
            <a href="/">Post Your Advertisement</a>
          </div>
        </div>
      </div>

      <div className="container">
        <span className="products-heading">New Products</span>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="product-box">
              <Link to="/products">
                {" "}
                <div className="product-image">
                  <img
                    className="new-img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                    alt=""
                  ></img>
                  <div className="cart-fav">
                    <a href="/">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                        alt=""
                      ></img>
                    </a>
                    <a href="/">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                        alt=""
                      ></img>
                    </a>
                  </div>
                </div>
              </Link>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  mt-5">
        <div className="row d-flex justify-content-space-around two-img-row">
          <div className="col-6 two-img">
            <img
              src="http://13.234.30.40:3000/static/media/oximeter.01792f1436dc4c737404.png"
              alt=""
            ></img>
          </div>
          <div className="col-6 two-img">
            <img
              src="http://13.234.30.40:3000/static/media/sugar_machine.4e807d07bacbdfb9daea.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>

      <div className="container mt-2 mb-3">
        <span className="feature-heading">Featured Products</span>

        <div className="row">
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-2">
        <span className="bestsell-heading">Best Seller Products</span>

        <div className="row">
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="product-box">
              <div className="product-image">
                <img
                  className="new-img"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAhCAYAAAChrUf3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7Zk/b9NAGMZf24mNKv6JLhSkhgUWKAMTSBAmpoa5SERMSCDxAYr4AJXKxFIJVgQSzFRi6EQ60AUGRJdOBAmVBQlEqWontrnntR0cN6ag3l3S6n5SZefOdpVf3ufea2PFjygmw66wybBrjEQJGIkSMBIlYCRKwEiUgJEoASNRAkaiBJRK7J5ukn/1CcXukcHztes8v9dRKjE8cVmIvEmdCw8GzkfjUzy/19ES5865exROXKH9ihaJ9s82+fXyWA8C18aHav91z7DQItFt3RVCJktjnQfSgovztHnrC23OrPLRv/aC4oOTvXkeE9fk6dYa9Ov2BgWF34F1GePx+HlShRaJzvoyVT4u/FOsg0vzvE5W38/R2Muz5C3doOjYFG0JkcAKfpD97QOFZ5p994WnGsmx1iiMT5MlkmCJe1ShbYvjCil483+LddJomuSu3Ofr8eYr7UWu5EhUUvYBVNae8TPyH0goOj2ej+uwDGRgB+B8XSaVaJOICvLSWAcl25pwop6cBN9ZUPbzZz45d4RYPC97jShDqrcyy+OdtON306qsrD0nlVRII6gU9+0sR9YpxBFkFeqn0d02n1ZYFukolYgoo2ptsWw4661t41hOVKJVIqiuLvCbQ/Nw2q/65iAHjD092TsvA9WIZ0BsdLwuIttKxj8tJhv8wrhKhvJnn/fmDh+x/uWx08UfDSgPOvPW9Ou+aGNdBBAZiSUii2wWdb/+uG9cJdorEVgbn6n6bo5jnYe7uJCDrZCNyIrXyZbnoTge5v1m7xliHtdj3ctHtte9hXAdUQZDkQiyWBe3PGg+hErK7QMh4sDSDMvPg6rD/cXuWzauCmtUvzLlJuMd5XMrV4GjyNAqcSe4sezQXEYF8/9ECRiJEjASJWAkSsBIlICRKAEjUQJGogR+AxhaJ5dXJ3aeAAAAAElFTkSuQmCC"
                  alt=""
                ></img>
                <div className="cart-fav">
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7Zg9TBRBGIbfWe4Ok1M5oqEQQ8AGC0FptJGI2ChiopVREwONES2IJVZUEjqosNBoIbUWBCpRIzFRG8JpIo23GrEgGo4YYw7ijvNOWHM5D5n9IYzmnmRvf2Zn5tn5+XZvBHzuDWYcL90vpewAuG0Js9LzRnFl4L5/QejfsaFGkXSeqKNG2IErV73j6BtwtaC4M5yDPXI+rqz60VaFu0M9AqIH9pGBlyw4Qjr9sBQhxDFH7Q/BWmSHA8upCEalIhiVBEJSk6xGS+0ufTyz+LlsekN6O2pS1cgufcXyagFhCCzYkN6B20dOoL2u/vc1Vj6ee4db2df6/FpzK643H9SSPjr9zSt8/P4NQRDqNSdNb6bcVOc57EylMDY/h7mlL1ruUtN+vfGc786W2t1aaOJTTqd3792H0/VNOu3U9MNAkoEE3565DN7cVaYSCrJlSd/Lx3igBEsf7sXJ8/ohuqYfwRTjLj5at0dXclVVXq4F2GLLKyu6xZ4vLvyRzjzs4uG2dj08yt1TDuNZ3Kq6jbDb1mNi4f1fKx7Pzeu9P7lM+H/iIEMF8VsyDN1qohSXZYKxILvugxpHnAjF4cMU5rl54LAuw3T8BRIkF2cm9USZ7DwbSJL3Tqk8zHtBlRGEQIIMEZzF7GZTSV+OsZHhJ6vK2DRBwnBiKlkqVxobN0XQVDIOudCCG0nGJRdJcD3JOOVI6M+tYknC8ENJ/2MhDjnEIUiKJUlcciQWQUJJhqGM+kANEog3IjZBks0Hi3EmVP40RaUiGJV/QVA+hbWIWUetST+DpUjv56iDxLYRdezCPlwupjvovZHXC9Z2SbprTmur/D5qvRpqSVhs0aqr5HzgkEsURtA7mOe1X22JKBmqWn/pAAAAAElFTkSuQmCC"
                      alt=""
                    ></img>
                  </a>
                  <a href="/">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB7Zi9a1NRGMafc5tYoUhTtC6RtjoUBFOrIDj0Yu0m6OQkiLQggnYoTpKtW+zWDkYHRRfxD3Bw9KPdBGkTBdslV4kOsdIbRSQp3uN5T3NLlzTng6ZnyA+ScxJeuM99z/ucL4aYp7MpL+qZ4ZyPA/TZF5Z5FC3gVvZZ/AeT3w9zQyzpvRa9IbhBwDeji7idDaRA9niuBHfExQS86++ZLjzJTTKwSbhHClGy5jHuzcBRGGMXPNGOwln4uAfH6Qi0xXmBCZWgF/4lZFL927+L4Q9cW3yFdqAkcKnyHdV6XfYHeg7hcvoEepPdqG7WsNcoCXywurLd94+m4U+kMdJ3BIuVb9hrtGuwEK7LNtN3GO1AKYM7qdZr+PrnN6aHR+VQ61IUL3jvw5JyvJGL31XKshZ1obIYEyWig3YGiWJjmMnJOkb5dOWGyP4v6GCUweLGT9lSRlTpPdAts65rLCOBJkbJpLZi45dTxUhgbJSRHZN3K+JsFzbWoYPxUkdG8TUK3u8/hi/ipXQnd2OBZBSqKVpRVKBYWiJ1MXIxEdfSo/MTeFku7Ro7KMTREOfXVqCLsUByY+7je2RPnVOasCn+eekzdGHiRMdhyWCLSTsUGw3TjYVxBmOoBqn4W8WYYrVhvX92DOWrNzEn2mZQCVAMrSImQo0F0sowPXxa9u+IttnDrx8/KYd3oGGUtgmkyTq/VpD9/GqhaY2RMUg8TdAm+0drk6jsrG1239aHJpUH2xwNOsdOWzoCbREC+Rs4C1v2xJ30WzgKj/4teEgcnBf9AO4R0GW6h6m7obywdktk0NDUuOWPEffVEFfCbJ9uXTn5gUouUZvH1GxI//0HZ7bo9WsGXXUAAAAASUVORK5CYII="
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>

              <div className="product-title">
                <span>Air Compressor</span>
                <p>15</p>
              </div>
              <div className="product-price row ">
                <div className="col">
                  <span>$ 1000.00</span>
                  <p> $ 1000.0000</p>
                </div>
                <div className="col">
                  <div className="con-btn">
                    <a href="/">Contact Seller</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 mt-4">
        <div className="row">
          <span className="expertise-title">Our Expertise</span>
        </div>
        <div className="row d-flex">
          <div className="col expertise-card">
            <img
              src="http://13.234.30.40:3000/static/media/expert.8adfb219d2fa5df388f2.png"
              alt=""
            ></img>
            <p className="card-name">Sale Lead</p>
            <p className="card-des">Sale Lead Description</p>
          </div>
          <div className="col expertise-card">
            <img
              src="http://13.234.30.40:3000/static/media/expert.8adfb219d2fa5df388f2.png"
              alt=""
            ></img>
            <p className="card-name">Sale Lead</p>
            <p className="card-des">Sale Lead Description</p>
          </div>
          <div className="col expertise-card">
            <img
              src="http://13.234.30.40:3000/static/media/expert.8adfb219d2fa5df388f2.png"
              alt=""
            ></img>
            <p className="card-name">Sale Lead</p>
            <p className="card-des">Sale Lead Description</p>
          </div>
          <div className="col expertise-card">
            <img
              src="http://13.234.30.40:3000/static/media/expert.8adfb219d2fa5df388f2.png"
              alt=""
            ></img>
            <p className="card-name">Sale Lead</p>
            <p className="card-des">Sale Lead Description</p>
          </div>
          <div className="col expertise-card">
            <img
              src="http://13.234.30.40:3000/static/media/expert.8adfb219d2fa5df388f2.png"
              alt=""
            ></img>
            <p className="card-name">Sale Lead</p>
            <p className="card-des">Sale Lead Description</p>
          </div>
        </div>
      </div>

      <div className="conatainer-fluid bg-client">
        <div className="card-title">
          <p>What are Client Says</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAICAYAAACWJRasAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA1SURBVHgB7dRBAQAQAAAxtNdBVyq4/xZic559BwDf1gAgESdAJE6ASJwAkTgBInECROIEiB4QdQI136tDsAAAAABJRU5ErkJggg=="
            alt=""
          ></img>
        </div>
        <div className="card-slide">
        <div className="card-box bg-white">
            <img
              className="quote-mark"
              src="data:image/png;base64,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"
              alt=""
            ></img>
            <p>Sales Lead Description</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAACCAYAAAAaRY8cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB3cABEQAADAFAW/8Ijqj08Ec5GPAYUXRxAtzcdrxHAAAAAElFTkSuQmCC"
              alt=""
            ></img>
            <img
              className="client-img"
              src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
              alt=""
            ></img>
            <p className="client-name">Tiya Sharma</p>
          </div>
          <div className="card-box bg-white">
            <img
              className="quote-mark"
              src="data:image/png;base64,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"
              alt=""
            ></img>
            <p>Sales Lead Description</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAACCAYAAAAaRY8cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB3cABEQAADAFAW/8Ijqj08Ec5GPAYUXRxAtzcdrxHAAAAAElFTkSuQmCC"
              alt=""
            ></img>
            <img
              className="client-img"
              src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
              alt=""
            ></img>
            <p className="client-name">Tiya Sharma</p>
          </div>
          <div className="card-box bg-white">
            <img
              className="quote-mark"
              src="data:image/png;base64,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"
              alt=""
            ></img>
            <p>Sales Lead Description</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAACCAYAAAAaRY8cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB3cABEQAADAFAW/8Ijqj08Ec5GPAYUXRxAtzcdrxHAAAAAElFTkSuQmCC"
              alt=""
            ></img>
            <img
              className="client-img"
              src="http://13.234.30.40:3000/static/media/testimage1.8007b3625a4b89faa2fe.png"
              alt=""
            ></img>
            <p className="client-name">Tiya Sharma</p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5">
        <span className="blog-title text-center">Blogs/Articles</span>
        <div className="container">
          <div className="row d-flex justify-content-space-between">
            <div className="col">
              <img
                className="blog-img"
                src="http://13.234.30.40:3000/static/media/video_Advt.3000f717bbb09ed82720.png"
                alt=""
              ></img>
            </div>
            <div className="col">
              <img
                className="blog-img"
                src="http://13.234.30.40:3000/static/media/video2img.909308897779b03435ea.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
