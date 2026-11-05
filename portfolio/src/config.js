// =============================================================================
// PORTFOLIO & CV DATA — PHAM THANG THIEN
// =============================================================================

export const CV_DATA = {
  profile: {
    name: "PHẠM THẮNG THIỆN",
    title: "Network Security & Systems Engineer",
    subtitle: "B.S. in Information Security | Network Infrastructure & OS Specialist",
    location: "46/12 Đông Hưng Thuận 08, Phường Đông Hưng Thuận, Quận 12, TP. Hồ Chí Minh",
    phone: "0338623328",
    email: "thienpham12112003@gmail.com",
    facebook: "https://www.facebook.com/thien.phamthang.1211",
    linkedin: "https://www.linkedin.com/in/pham-thang-thien-pham-5a587640b",
    github: "https://github.com/thienmeo",
    summary:
      "Cử nhân chuyên ngành An toàn thông tin (Đại học Công Thương TP.HCM - HUIT) với nền tảng chuyên sâu về Bảo mật mạng (Network Security), Quản trị hệ thống (System Administration), và Hệ điều hành (Linux & Windows Server). Kinh nghiệm thực chiến cấu hình tường lửa doanh nghiệp (Sophos UTM), triển khai WAF (ModSecurity), mô phỏng mạng diện rộng (CCNA) và phân tích log hệ thống / phần mềm mã độc. Có năng lực lập trình C/C++, C#, Web Frontend hiện đại và tư duy giải quyết sự cố kỹ thuật độc lập."
  },

  education: {
    school: "Ho Chi Minh City University of Industry and Trade (HUIT)",
    degree: "Bachelor of Science in Information Security",
    status: "Graduated (Đã tốt nghiệp 2026)"
  },

  projects: [
    {
      id: "net-sim",
      title: "Network Architecture & Security Simulation",
      badge: "CCNA / ENTERPRISE NETWORKING",
      tech: ["Cisco Packet Tracer", "GNS3", "VLAN", "ACL", "OSPF", "NAT"],
      description:
        "Thiết kế và mô phỏng hoàn chỉnh topo mạng doanh nghiệp đa vùng (multi-area routing & switching) bằng Cisco Packet Tracer và GNS3. Cấu hình phân tách VLAN, ACLs, Subnetting và NAT để cô lập lưu lượng độc hại và tăng cường biên phòng mạng.",
      link: "https://tinyurl.com/CCNAPTT",
      linkText: "Xem Demo CCNA (TinyURL)"
    },
    {
      id: "sophos-fw",
      title: "Sophos UTM Enterprise Firewall Deployment",
      badge: "SYSTEMS & FIREWALL",
      tech: ["Sophos UTM", "Windows Server 2008/2012", "IPS Engine", "Packet Filtering"],
      description:
        "Triển khai và cấu hình giải pháp tường lửa Sophos UTM bảo vệ toàn diện hạ tầng mạng nội bộ máy chủ Windows Server. Thiết lập các bộ quy tắc lọc gói tin nghiêm ngặt, giám sát lưu lượng thời gian thực và áp dụng chính sách ngăn chặn xâm nhập (IPS).",
      link: "https://tinyurl.com/UTMPTT",
      linkText: "Xem Demo Sophos UTM (TinyURL)"
    },
    {
      id: "waf-modsec",
      title: "Web Application Firewall (ModSecurity Demo)",
      badge: "APPLICATION SECURITY",
      tech: ["Apache HTTP Server", "ModSecurity WAF", "Linux", "OWASP Top 10"],
      description:
        "Tích hợp ModSecurity WAF vào máy chủ Apache trên nền Linux để kiểm tra và phân tích lưu lượng HTTP/HTTPS gửi đến. Xây dựng và thực nghiệm các bộ quy tắc tùy chỉnh để phát hiện, chặn đứng các lỗ hổng Web phổ biến (SQL Injection, XSS).",
      link: "https://tinyurl.com/modsecurityPTT",
      linkText: "Xem Demo ModSecurity (TinyURL)"
    },
    {
      id: "threat-log",
      title: "System Activity & Keylogger Logging Analysis",
      badge: "SYSTEMS INTERNALS & MALWARE",
      tech: ["Refog Keylogger", "IWantSoft", "Windows Sysinternals", "Log Analysis"],
      description:
        "Thực nghiệm tạo keylogger (Refog, IWantSoft), theo dõi hành vi tiến trình hệ thống, can thiệp Registry và phân tích nhật ký (system logs) trong môi trường lab cách ly nhằm phát hiện các hành vi bất thường và dấu vết xâm nhập.",
      link: "https://tinyurl.com/keyloggerPTT",
      linkText: "Xem Demo Keylogger Log (TinyURL)"
    },
    {
      id: "other-projects",
      title: "Các Dự Án Lab & Báo Cáo Kỹ Thuật Khác",
      badge: "TECHNICAL REPOSITORIES",
      tech: ["C/C++", "C#", "MySQL", "Oracle", "Security Labs"],
      description:
        "Tập hợp các tài liệu báo cáo thực hành, mã nguồn lập trình phần mềm, thiết kế cơ sở dữ liệu và các kịch bản mô phỏng an toàn thông tin chuyên sâu.",
      link: "https://byvn.net/aPkI",
      linkText: "Xem Kho Dự Án (Byvn)"
    },
    {
      id: "interactive-portfolio",
      title: "Interactive 3D Web & Security Portfolio (Trang Web Này)",
      badge: "CREATIVE ENGINEERING",
      tech: ["Three.js", "GSAP Animation", "Web Audio API", "Vite", "JavaScript"],
      description:
        "Chính nền tảng Portfolio tương tác 3D bạn đang trải nghiệm: Tích hợp mạng lưới nơ-ron WebGL thời gian thực, hệ thống âm thanh Web Audio bản địa và hiệu ứng chuyển động GSAP đạt chuẩn hiệu năng 60 FPS.",
      link: "https://github.com/thienmeo/interactive-security-portfolio",
      linkText: "GitHub Repo"
    }
  ]
};
