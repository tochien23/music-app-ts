const fs = require("fs-extra");

const listFolderCopy = [
    {
        sourceDirectory: "views",
        targetDirectody: "dist/views"
    },
    {
        sourceDirectory: "public",
        targetDirectody: "dist/public"
    },
];

listFolderCopy.forEach(item => {
    fs.copy(item.sourceDirectory, item.targetDirectody, (err) => {
        if (err) {
            console.error(`Lỗi sao chép thư mục ${item.sourceDirectory}: `, err);
        } else {
            console.error(`Sao chép thành công thư mục ${item.sourceDirectory}`);
        }
    });
});