# Kiểm Thử Tự Động Trang Đăng Nhập với CodeceptJS và Azure OpenAI

Dự án này sử dụng CodeceptJS kết hợp với Azure OpenAI để thực hiện kiểm thử tự động cho trang đăng nhập của ứng dụng web RiderVolt.

## Giới Thiệu

Dự án này thể hiện cách sử dụng CodeceptJS với Azure OpenAI để tạo các kịch bản kiểm thử tự động, giúp phát hiện lỗi và đảm bảo chất lượng phần mềm. Cụ thể, dự án tập trung vào kiểm thử chức năng đăng nhập với các trường hợp khác nhau.

## Chức Năng Chính

- Kiểm thử đăng nhập thành công
- Kiểm thử đăng nhập thất bại với thông tin đăng nhập không chính xác
- Kiểm thử xác thực định dạng email
- Tạo báo cáo kiểm thử với Allure

## Yêu Cầu Hệ Thống

- Node.js (v14 hoặc cao hơn)
- npm hoặc yarn
- Tài khoản Azure OpenAI với API key

## Cài Đặt

1. Clone dự án:
```bash
git clone https://github.com/cuongnguyenphu2005/test_CodeceptJS_AI_Testing
cd codeceptjs-ai-testing
```

2. Cài đặt các gói phụ thuộc:
```bash
npm install
```

3. Tạo file `.env` và thêm các thông tin cần thiết:
```
AZURE_OPENAI_ENDPOINT=https://your-endpoint.openai.azure.com
AZURE_OPENAI_KEY=your-api-key
AZURE_OPENAI_DEPLOYMENT=your-deployment-name
AZURE_OPENAI_API_VERSION=2023-05-15
```

## Cấu Trúc Dự Án

```
├── codecept.conf.js    # File cấu hình CodeceptJS
├── package.json        # Quản lý dependencies
├── output/             # Kết quả kiểm thử và báo cáo Allure
├── pages/              # Page Objects
│   └── LoginPage.js    # Định nghĩa các selector cho trang đăng nhập
└── tests/              # Các file kịch bản kiểm thử
    ├── login_test.js           # Kiểm thử đăng nhập cơ bản
    └── filless_login_test.js   # Kiểm thử xác thực định dạng email
```

## Chạy Kiểm Thử

Chạy tất cả các kiểm thử và tạo báo cáo Allure:
```bash
npx codeceptjs run --plugins allure
```

Chạy một file kiểm thử cụ thể:
1) Email không hợp lệ
```bash
npx codeceptjs run tests/filless_login_test.js --plugins allure
```
2) Đăng nhập thông thường
```bash
npx codeceptjs run tests/login_test.js --plugins allure
```
Xem báo cáo Allure:
```bash
npx allure serve output
```

## Kịch Bản Kiểm Thử

Dự án hiện bao gồm hai loại kiểm thử chính:

1. **Kiểm thử đăng nhập cơ bản** (`login_test.js`):
   - Đăng nhập thành công với thông tin hợp lệ
   - Đăng nhập thất bại với mật khẩu không chính xác

2. **Kiểm thử xác thực định dạng email** (`filless_login_test.js`):
   - Email thiếu ký tự @
   - Email thiếu tên miền sau @
   - Email chứa nhiều ký tự @ không hợp lệ

## Tạo Kiểm Thử Mới

1. Tạo file kiểm thử mới trong thư mục `tests/` với định dạng tên `*_test.js`

2. Sử dụng cấu trúc sau:
```javascript
const { I } = inject();
// Import Page Object nếu cần
const LoginPage = require('../pages/LoginPage');

Feature('Tên tính năng');

Scenario('Mô tả kịch bản kiểm thử', async ({ I }) => {
  // Các bước kiểm thử
});
```

## Tài Liệu Tham Khảo

- [CodeceptJS Documentation](https://codecept.io)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Allure Report Framework](https://docs.qameta.io/allure/)
- [Azure OpenAI Service](https://azure.microsoft.com/en-us/services/cognitive-services/openai-service/)

## Giấy Phép

MIT
