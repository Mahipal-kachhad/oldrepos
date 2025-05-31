<Container fluid>
      <Row className="hero-bac p-4">
      <Row className="bg-success">
        <Col>
            <img className="logo" src={require("./images/logo.svg").default} />
            <h4>Headings</h4>
        </Col>
        <Col className="d-none d-lg-block">
          
        </Col>
      </Row>
      </Row>
        <h1 className="hero-heading mx-5">
          Quality Roofing <br /> Solutions
        </h1>
        <h3 className="mx-5 1h-0">Durable, Reliable, and Professional</h3>
        <div className="form-bac d-flex justify-content-between pb-5">
          <div className="m-5 p-3 d-inline-block border rounded-4 re-back">
            <div>
              <i className="bi bi-star-fill text-white mx-1"></i>
              <i className="bi bi-star-fill text-white mx-1"></i>
              <i className="bi bi-star-fill text-white mx-1"></i>
              <i className="bi bi-star-fill text-white mx-1"></i>
              <i className="bi bi-star-half text-white mx-1"></i>
              <span className="text-white">(25)</span>
            </div>
            <p className="text-white re-count m-0">357</p>
            <p className="text-white text-center fs-6 m-0 text-uppercase">
              reviews
            </p>
          </div>
          <div className="p-4 pb-0 mx-5 bg-white rounded-4">
            <form>
              <h1>Get a Quote</h1>
              <div className="d-flex justify-content-between column-gap-5 my-4">
                <div className="">
                  <label className="d-block" htmlFor="name">
                    First Name *
                  </label>
                  <input
                    className="w-100 border border-1 rounded-2 border-secondary fs-5 mt-2 p-1"
                    type="text"
                    id="name"
                  />
                </div>
                <div className="">
                  <label className="d-block" htmlFor="name">
                    Last Name *
                  </label>
                  <input
                    className="w-100 border border-1 rounded-2 border-secondary fs-5 mt-2 p-1"
                    type="text"
                    id="name"
                  />
                </div>
              </div>
              <div className="my-4">
                <label className="d-block" htmlFor="name">
                  Email *
                </label>
                <input
                  className="w-100 border border-1 rounded-2 border-secondary fs-5 mt-2 p-1"
                  type="email"
                  id="name"
                />
              </div>
              <div className="my-4">
                <label className="d-block" htmlFor="name">
                  Phone Number *
                </label>
                <input
                  className="w-100 border border-1 rounded-2 border-secondary fs-5 mt-2 p-1"
                  type="number"
                  id="name"
                />
              </div>
              <div className="my-5">
                <button className="rounded-3 w-100 fs-5 border border-0 bg-black text-white py-2 d-inline-block">
                  Get a Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      <div className="p-5 second-bac">
        <h1 className="my-4">About</h1>
        <p className="fw-lighter">Our Mission</p>
        <p className="fs-3 w-75">
          Heading Roofs is committed to providing top-tier roofing services to
          both residential and commercial customers. With years of experience in
          the industry, our skilled team delivers exceptional results that stand
          the test of time.
        </p>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="m-4 w-50">
            <p>
              Our team of experienced professionals is dedicated to delivering
              high-quality results that exceed your expectations. We are
              committed to providing reliable and efficient services that
              enhance the durability and aesthetics of your property.
            </p>
            <p>
              Our team of experienced professionals is dedicated to delivering
              high-quality results that exceed your expectations. We are
              committed to providing reliable and efficient services that
              enhance the durability and aesthetics of your property.
            </p>
            <button className="border border-0 rounded-3 bg-black text-white py-2 px-3">Learn More</button>
          </div>
          <div className="m-4 w-50 px-4">
            <div className="mx-auto rounded-4 overflow-hidden"><img className="object-fit-cover" src={require("./images/roof.jpg")} alt="" /></div>
          </div>
        </div>
      </div>
      <div className='w-90 mx-auto'>
        <h2 className="fs-1 ">Services</h2>
        <p className="my-4">Our Roofing Services</p>
        <Card/>
      </div>
       
    </Container>