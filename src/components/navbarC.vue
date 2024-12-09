<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top p-3">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon "></span>
      </button>

      <a class="navbar-brand fs-1 fw-bold text-uppercase" href="/">Shop.co</a>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav mb-lg-0 text-capitalize fw-bold mx-auto">
          <li class="nav-item dropdown mx-lg-2">
            <a class="nav-link dropdown-toggle fs-5 fw-bold" href="/" id="navbarDarkDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              shop
            </a>
            <nav class="dropdown-menu dropdown-menu-white bg-white-50 border-1"
              aria-labelledby="navbarDarkDropdownMenuLink">
              <a class="dropdown-item border-bottom border-1 fs-3" href="#">Men</a>
              <a class="dropdown-item border-bottom border-1 fs-3" href="#">Women</a>
              <a class="dropdown-item border-bottom border-1 fs-3" href="#">Bags</a>
              <a class="dropdown-item fs-3" href="#">Shoes</a>
            </nav>
          </li>
          <li class="nav-item mx-2 mt-1">
            <a class="nav-link p-lg-1 fs-5 fw-bold" href="#selling">on sale</a>
          </li>
          <li class="nav-item mx-2 mt-1">
            <a class="nav-link p-lg-1 fs-5 fw-bold" href="#arrivals">new arrivals</a>
          </li>
          <li class="nav-item mx-2 mt-1">
            <a class="nav-link p-lg-1 fs-5 fw-bold" href="#">brands</a>
          </li>
        </ul>
        <form class="d-lg-flex p-lg-1 form-control rounded-pill w-50 bg-light me-md-1 d-md-none d-sm-none">
          <i class="fa fa-search mt-1 p-2"></i>
          <input class="form-control border-0 eide-input bg-light" type="search" placeholder="Search"
            aria-label="Search" />
        </form>
      </div>
      <ul class="icons d-flex ms-auto align-items-center justify-content-end  ">
        <li class="nav-item d-lg-none">
          <a href="#" class="nav-link p-lg-2 me-sm-3" @click="toggleSearch">
            <i class="fa fa-search"></i>
          </a>
          <div class="search-box container" v-if="showSearch">
            <input type="text" class="form-control rounded-pill" placeholder=" search..." />
          </div>
        </li>
        <li class="nav-item p-2">
          <a class="btn btn-white border-0" href="/cart">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </li>
        <li class="nav-item p-2">
          <a href="/signup" class="nav-link me-sm-3">
            <i class="far fa-user-circle"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarC",
  data() {
    return {
      showSearch: false,
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  .navbar-brand {
    font-family: "Integralcf-Bold", sans-serif;
  }

  .nav-link {
    font-family: "Satoshi-400", sans-serif;
  }
}

.navbar-toggler {
  border: none !important;

  &:focus {
    box-shadow: none !important;
  }

  .navbar-toggler-icon {
    width: 40px;
    height: 40px;
  }
}

.icon-cart {
  top: -10%;
  right: -10px;
  width: 20px;
  height: 20px;
}

.icons {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  li {
    .from-control {
      border: none;
    }

    a {
      text-decoration: none;
      font-size: 1rem;
      color: #333;
      cursor: pointer;
    }

    .search-box {
      position: absolute;
      top: 100%;
      left: 0;
      width: 700px;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
      margin-left: 100px;
      margin-top: 2px;
      border-radius: 5px;

      input {
        &:focus {
          outline: none;
          box-shadow: none;
          border-color: #eee;
        }
      }
    }
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
  }
}

.eide-input {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
