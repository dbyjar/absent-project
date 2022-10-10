<template>
  <Box>
    <form class="form-horizontal form-material mx-2">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control form-control-line">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-line">
      </div>
      <div class="form-group">
        <label>Phone No</label>
        <input type="text" class="form-control form-control-line">
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea rows="5" class="form-control form-control-line"></textarea>
      </div>
      <div class="form-group">
        <label class="col-sm-12">Select Country</label>
        <div class="col-sm-12">
          <select class="form-select shadow-none form-control-line">
            <option>London</option>
            <option>India</option>
            <option>Usa</option>
            <option>Canada</option>
            <option>Thailand</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button class="btn btn-success text-white">Update Profile</button>
        </div>
      </div>
  </form>
  </Box>
</template>