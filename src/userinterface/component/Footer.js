import { Box } from '@mui/material';

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden py-16 bg-[#b2bec3] dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">

          {/* Logo & Social Links */}
          <div className="w-full lg:w-4/12 px-4 mb-20 lg:mb-0">
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src="/techhelp4U.jpg" alt="logo" style={{ width: 250, marginBottom: 1 }} />
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: '2.75rem',
                  color: '#2563eb',
                  lineHeight: 1.1,
                  marginTop: -5, // reduce line height to bring lines closer
                }}
              >
                TECH
                <Box component="span" sx={{ color: '#111827' }}>
                  help4U
                </Box>
              </Box>
            </Box>

            {/* Social Icons */}
           </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/5 md:w-1/3 lg:w-2/12 px-4 mb-10 ml-auto mt-3">
            <h5 className="text-secondary ml-4 flex gap-6">Useful Links</h5>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-600">Homepage</a></li>
              <li><a href="/Blog" className="hover:text-blue-600">Blog</a></li>
              <li><a href="/About" className="hover:text-blue-600">About</a></li>
              <li><a href="/Contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="/Team" className="hover:text-blue-600">Team</a></li>
            </ul>
          </div>

          {/* Terms */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 px-4 mb-10 mt-3">
            <h5 className="text-secondary ml-4 flex gap-6">Follow Us</h5>
 <div className="flex gap-3 mt-6 ml-2">
              <a
                href="https://www.instagram.com/tech_help4u/?igsh=MWRoZm53NWtkOTN2aw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-pink-500 text-2xl"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://x.com/TECH_help4U"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://www.nexfellow.com/explore/TECHhelp_4U"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 text-2xl"
              >
                <i className="fas fa-user-friends"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/techhelp4u/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 text-2xl"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/12 px-4 mb-10 mt-3">
            <h5 className="text-secondary ml-4 flex gap-6">Contact</h5>
<ul className="space-y-2 text-gray-600 dark:text-gray-300">
 <li className="flex items-start gap-2">
  <strong className="text-secondary">support:</strong>
  <a href="support@techhelp4u.tech" className="hover:text-blue-600">
    support@techhelp4u.tech

  </a>
</li>
<li className="flex items-start gap-2">
  <strong className="text-secondary">info:</strong>
  <a href="Info@techhelp4u.tech" className="hover:text-blue-600">
   
Info@techhelp4u.tech 
 </a>
</li>

<li className="flex items-start gap-2">
  <strong className="text-secondary">Phone:</strong>
  <a href="tel:+911234567890" className="hover:text-blue-600">
    +91-6265320187 | +91-9307168404
  </a>
</li>

<li className="flex items-start gap-2">
  <strong className="text-secondary">Address:</strong>
  <span className="text-blue-600">
    Technology, Information and Internet Bhopal, Madhya Pradesh
  </span>
</li>

</ul>


          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-6"></div>

        {/* Footer Bottom */}
<p className="text-center text-sm text-gray-500 dark:text-white">
  © {new Date().getFullYear()} TECHhelp4U. Proudly built by the TECHhelp4U Team.
</p>


      </div>
    </footer>
  );
}
