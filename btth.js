// Dữ liệu quét từ thẻ bệnh nhân
const rawTicketCode = " med-rhm-0815-bhyt ";

// Dọn khoảng trắng và chuyển thành chữ in hoa
const cleanTicketCode = rawTicketCode.trim();
const normalizedCode = cleanTicketCode.toUpperCase();

// Kiểm tra mã phiếu
const isValidCode = normalizedCode.startsWith("MED-");

// Lấy mã chuyên khoa
const departmentCode = normalizedCode.slice(4, 7);

// Kiểm tra BHYT
const hasInsurance = normalizedCode.includes("BHYT");

// Lấy số thứ tự
const ticketNumber = normalizedCode.slice(8, 12);

// Tính giá khám
const basePrice = 150000;
let examinationFee = basePrice;

if (hasInsurance) {
  examinationFee = basePrice * 0.2;
}

// In phiếu tiếp đón
console.log(`
${"=".repeat(35)}
       PHIẾU TIẾP ĐÓN
${"=".repeat(35)}
Mã phiếu       : ${normalizedCode}
Mã hợp lệ      : ${isValidCode}
Chuyên khoa    : ${departmentCode}
Số thứ tự      : ${ticketNumber}
BHYT           : ${hasInsurance ? "Có" : "Không"}
Giá khám       : ${examinationFee.toLocaleString("vi-VN")} VNĐ
${"=".repeat(35)}
`);
