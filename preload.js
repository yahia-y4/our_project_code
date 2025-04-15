const fs = require('fs');
const { parse } = require('path/posix');


class DataMC {
    constructor() {
        this.all_items_in_storage_ary = []
        this.load_all_files()

    }

    load_all_files() {
        this.load_all_items_in_storage_file()

    }

    load_all_items_in_storage_file() {

        try {
            this.handel_all_items_ary()
            console.log("تمت القراءة من ملف all_item_in_storage")
        } catch {
            try {
                let data = []
                fs.writeFileSync('./Data/all_items_in_storage.json', JSON.stringify(data), 'utf-8')
                this.handel_all_items_ary()
                console.log("لم يتم العثور على ملف  all_items_in_storage.json (تم انشاؤه)")
            } catch {
                console.log("خطا في تحميل الملف all_items_in_storage.json")
            }
        }


    }
    handel_all_items_ary() { // هذه الدالة تقوم بتحميل البيانات من الملف الى السجل او المتغير الخاص به 
        this.all_items_in_storage_ary = this.gave_me_data_from('./Data/all_items_in_storage.json')
    }

    gave_me_data_from(file_path) {
        try {
            const data = fs.readFileSync(file_path, 'utf-8')
            return JSON.parse(data)

        } catch {
            console.error("خطاء في قراءة الملف ذو المسار المعطاة من قبلك ", file_path)

        }
    }

    geve_data_toSave_in(file_path, data) {
        try {
            fs.accessSync(file_path, fs.constants.F_OK);
            fs.writeFileSync(file_path, JSON.stringify(data), 'utf-8')
            console.log("تم الحفظ في ", file_path)

        } catch {
            console.error(" خطاء في عملية الحغظ للمسار ", file_path)

        }

    }
}

class StorageMC {
    constructor() {

    }

    add_item_to_storage() {
        // هذه البيانات يتم احظارها من صفحة html,   عن طريق وسوم ال input 
        let name = "yahia"
        let co_name = "yahia"
        let num = 1
        let price = 1
        let profit = 0.1
        let class_ = "yyyy"
        let code = "111"
        let note = "eeeee"

        if (name) {
            if (co_name) {
                if (class_) {
                    if ((+num) > 0) {
                        if ((+price) > 0) {
                            if ((+profit) >= 0) {
                                // عند تحقق كل الشروط السابقة تبدأ عملية الاضافة من هنا 

                                if (Array.isArray(Data_M_C.all_items_in_storage_ary)) {  // التحقق من هل السجل مصفوفة لكي يقبل الاضافة 

                                    Data_M_C.all_items_in_storage_ary.push({
                                        // اضافة البيانات الى السجل المؤقت 

                                        "name": name,
                                        "co_name": co_name,
                                        "num": name,
                                        "price": price,
                                        "profit": profit,
                                        "finall_price": (+price) + ((+price) * (+profit)), // هذا هو سعر المبيع يحسب بشكل تلقائي كما نرى
                                        "class_": class_,
                                        "code": code,
                                        "note": note,
                                        "add_date": "2025/4/15" // لم يتم بناء دالة جلب التاريخ بعد 

                                    }
                                    )

                                    // بعد الاضافة الى السجل المؤقت نحفظ السجل في الملف الخاص به 
                                    Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage_ary)
                                    // بعد الحفظ يجب اعادة تحميل البيانات من الملف الى السجل المؤقت هذا سيسرع التعامل معه لانه يكون محفوظ في الرام 
                                    Data_M_C.handel_all_items_ary()

                                    console.log("تمت الاضافة بنجاح ")

                                } else {
                                    console.error("خطاء السجل ليس مصفوفة ")
                                }





                            } else {
                                console.log("لا يمكن ان تكون نسبة الربح عدد سالب ")
                            }

                        } else {
                            console.log("لا يمكن ان يكون السعر قيمة معدومة او سالبة")
                        }

                    } else {
                        console.log("لا يمكن اضافة عنصر ذو عدد قطع معدومة او سالبة")
                    }

                } else {
                    console.log("خانة الصنف فارغة")
                }

            } else {
                console.log("خانة اسم الشركة فارغة")
            }

        } else {
            console.log("خانة الاسم فارغة ")
        }

    }
}

// *************************************************//

const Data_M_C = new DataMC()


window.addEventListener('DOMContentLoaded', () => {  // هذا الحدث يعني كل شيء داخل الاقواس سيتم تنفيذه بعد تحميل صفحة html, 
    // ستكون هنا جميع الكلاسات التي تحوي على دوال لها اتصال مباشر مع صفحة html,
    const Storage_M_C = new StorageMC()
    Storage_M_C.add_item_to_storage() // سيتم استدعاء دالة الاضافة عن طريق حدث النقر على ايقونة الاضافة وغير متوفرة الى الان بانتظار الفرونت اند .....

})



