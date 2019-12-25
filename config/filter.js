
/**
 * 格式化-性别
 */
export function formatGender(gender) {
	switch(Number(gender)) {
		case 1: return '男';
		case 2: return '女';
		default: return '位置'
	}
}
