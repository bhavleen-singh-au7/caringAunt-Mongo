const control = {

  blogs: (req, res) => {
    res.render('blog');
  },
  includeBlog1: (req, res) => {
    res.render('track-your-period');
  },
  includeBlog2: (req, res) => {
    res.render('amazing-facts');
  },
  includeBlog3: (req, res) => {
    res.render('period-brunch');
  },
  includeBlog4: (req, res) => {
    res.render('my-first-periods');
  },
  includeBlog5: (req, res) => {
    res.render('menst-during-lockdown');
  },
  includeBlog6: (req, res) => {
    res.render('pain-relief');
  },
  includeBlog7: (req, res) => {
    res.render('reusable-sanitary-pads');
  }
};

module.exports = control;