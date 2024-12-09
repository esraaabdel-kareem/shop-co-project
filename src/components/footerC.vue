<template>
  <div class="footer w-100">
    <div class="box">
      <div class="container">
        <div class="bg-black text-white p-5 rounded-5 d-flex justify-content-between  eide-section">
          <div class="title">
            <h1 class="main-title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          </div>
          <div class="row justify-content-center ">
            <form class="col-auto bg-white rounded-pill eide-box mb-2 mb-sm-6 ">
              <i class="far fa-envelope fa-2x text-black-50"></i>
              <input class="form-control border-0 eide-input fs-6 m-2 " type="email"
                placeholder="Enter your email address" v-model="email" required />
            </form>
            <button class="button px-5 col-auto mt-1" @click="subscribe">
              <span>Subscribe to Newsletter </span>
            </button>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-lg-3 mb-3">
            <h1 class="d-flex align-items-center my-2 fs-1 fw-bold">SHOP.CO</h1>
            <p class="text-black-50 mb-2 fs-5">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <ul class="social d-flex align-items-center py-3">
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="bg-dark border-black">
                  <i class="fab fa-facebook-f text-white"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2  mb-3 mt-4 ">
            <h5 class="sec-title fw-bold ms-4">Company</h5>
            <ul class="sec-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">help</h5>
            <ul class="sec-links">
              <li>
                <a href="#">customer support</a>
              </li>
              <li>
                <a href="#">delivery details</a>
              </li>
              <li>
                <a href="#">terms & conditions </a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2  mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">faq</h5>
            <ul class="sec-links">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">manage deliveries</a>
              </li>
              <li>
                <a href="#">orders</a>
              </li>
              <li>
                <a href="#">payments</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">resources</h5>
            <ul class="sec-links">
              <li>
                <a href="#">free ebooks </a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        <footer class=" text-black-50 text-capitalize pb-3 d-flex justify-content-between border-top border-3 border-secondary-subtle pt-3 ">
          <span class="fw-bold">shop.co &copy; 2000-2023, all rights reserved</span>
          
        </footer>
        <span class="payment-methods d-flex justify-content-end  gap-3 ">
            <img src="../assets/card/pngwing.com (2).png" alt="" class="rounded-2 bg-white "
              style="width: 50px; height: 50px" />
            <img src="../assets/card/pngwing.com (1).png" alt="" class="rounded-2 bg-white "
              style="width: 50px; height: 50px" />
            <img src="../assets/card/pngwing.com (3).png" alt="" class="rounded-2 bg-white "
              style="width: 50px; height: 50px" />
            <img src="../assets/card/pngwing.com (5).png" alt="" class="rounded-2 bg-white "
              style="width: 50px; height: 50px" />
            <img src="../assets/card/pngwing.com (4).png" alt="" class="rounded-2 bg-white "
              style="width: 55px; height: 50px" />
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerC",

  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  font-family: "poppins", sans-serif;
}

.sec-title {
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;

}

.sec-links {
  li {
    a {
      color: #777;
      text-transform: capitalize;
      margin: 0;
    }
  }
}

.eide-section {
  @media (max-width: 781px) {
    flex-direction: column !important;
    align-items: center !important;
  }

  .eide-box {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .eide-input {
      border-radius: 30px !important;

      &:focus {
        box-shadow: none;
      }
    }
  }
}

ul {
  list-style: none;

  a {
    text-decoration: none;
  }
}

.footer {

  .social {
    a {
      border: 1px solid silver;
      border-radius: 50%;
      color: black;
      background-color: white;
      margin-right: 15px;
      padding: 10px;
    }
  }
}

footer {
  @media (max-width: 781px) {
      align-items: center !important;
      justify-content: center !important;
      
    }
}
.payment-methods {

img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
}
@media (max-width: 781px) {
      align-items: center !important;
      justify-content: center !important;
      
    }
}

.box {
  padding: 20px;
  position: relative;
  border-radius: 10px;

  &::before {
    content: "";
    background-color: #f3f3f3;
    position: absolute;
    border-radius: 10px;
    height: calc(100% - 150px);
    bottom: 0;
    left: 0px;
    width: 100%;
    z-index: -2;
  }
}


.button {
  cursor: pointer;
  position: relative;
  font-size: 18px;
  color: black;
  border: 2px solid white;
  border-radius: 34px;
  background-color: white;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: inherit;
  color: white;
  scale: 0;
  z-index: -1;
  background-color: black;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: white;
  scale: .9;
  box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
}

.button:active {
  scale: 1;
}
</style>
