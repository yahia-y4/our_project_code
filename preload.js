const fs = require('fs');
window.addEventListener('DOMContentLoaded', () => {

    class DataMC {
        constructor() {

            //storage ------------------------------
            this.all_items_in_storage__ary = []
            this.format_items_in_srorage__ary = []
            this.format_items_in_srorag__id = 0




            //sell_record ---------------------------
            this.all_sales_record__ary = []
            this.format_record_sales__ary = []


            //buy_fatora ----------------------------
            this.buy_fatora_ary = []
            this.buy_fatora_id = 0
            this.cuont_items_in_buy_fatora = 0
            this.buy_fatora_is_run = false


            // sell_fatora ---------------------------
            this.sell_fatora__ary = []
            this.sell_fatora__id = 0
            this.cuont_items_in_sell_fatora = 0
            this.sell_fatora_is_run = false



            // moarid --------------------------------
            this.moarid__ary = []
            this.moarid__id = 0


            //Customers ------------------------------
            this.customers__ary = []
            this.customers__id = 0

            //Notifications---------------------------
            this.Notifications__ary = []

            //--------------
            this.running_out_num = 5
            this.zero_number = 0


            // التاكد من وجود المجلدات --------------
            this.make_dirs('./Data')
            this.make_dirs('./Data/Storage')
            this.make_dirs('./Data/Sales')
            this.make_dirs('./Data/Buy_fatora')
            this.make_dirs('./Data/Moarid')
            this.make_dirs('./Data/Customers')
            this.make_dirs('./Data/Sell_fatora')
            this.make_dirs('./Data/Notifications')


            //حفظ تاريخ بدء استخدام التطبيق---------
            this.start_use_date()



            // تحميل الملفات --------------------
            this.load_all_files()



        }

        load_all_files() {
            console.log("------- فحص القراءة من الملفات ------------")
            this.load_all_items_in_storage__file()
            this.load_format_items_in_storage__file()
            this.load_format_items_in_storage_id__file()
            this.load_all_sales_record__file()
            this.load_format_record_sales__file()
            this.load_buy_fatora__file()
            this.load_buy_fatora_id__file()
            this.load_moarid__file()
            this.load_moarid_id__file()
            this.load_customers__file()
            this.load_customers_id__file()
            this.load_sell_fatora__file()
            this.load_sell_fatora_id__file()
            this.load_Notifications__file()
            console.log('---------------------------------------------')

        }


        make_dirs(dirPath) {
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
        }

        start_use_date() {
            if (!fs.existsSync('./Data/Start_use_date')) {
                fs.mkdirSync('./Data/Start_use_date', { recursive: true });
                const now = new Date();
                const dayNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
                const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

                let start_use_data = {
                    "date": Date_MC.getFormattedDateTime()
                }

                fs.writeFileSync('./Data/Start_use_date/start_use_date.json', JSON.stringify(start_use_data), 'utf-8')
                console.log("تم انشاء ملف بدء الاستخدام ")
            } else {
                console.log("ملف بدء الاستخدام موجود ")
            }
        }


        // ------------------------------------دوال تحميل الملفات -----------------------------------
        load_all_items_in_storage__file() {

            try {
                this.handel_all_items__ary()
                console.log("تمت القراءة من ملف all_item_in_storage")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Storage/all_items_in_storage.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_items__ary()
                    console.log("لم يتم العثور على ملف  Storage/all_items_in_storage.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف Storage/all_items_in_storage.json")
                }
            }


        }
        load_format_items_in_storage__file() {

            try {
                this.handel_format_items__ary()
                console.log("تمت القراءة من ملف format_items_in_storage")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Storage/format_items_in_storage.json', JSON.stringify(data), 'utf-8')
                    this.handel_format_items__ary()
                    console.log("لم يتم العثور على ملف  format_items_in_storage.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف format_items_in_storage.json")
                }
            }

        }
        load_format_items_in_storage_id__file() {

            try {
                this.handel_format_items__id()
                console.log("تمت القراءة من ملف format_items_in_storage_id")
            } catch {
                try {
                    let data = [0]
                    fs.writeFileSync('./Data/Storage/format_items_in_storage_id.json', JSON.stringify(data), 'utf-8')
                    this.handel_format_items__id()
                    console.log("لم يتم العثور على ملف  format_items_in_storage_id.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف format_items_in_storage_id.json")
                }
            }
        }
        load_all_sales_record__file() {
            try {
                this.handel_all_record_sales__ary()
                console.log("تمت القراءة من ملف all_record_sales")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Sales/all_record_sales.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_record_sales__ary()
                    console.log("لم يتم العثور على ملف  Sales/all_record_sales.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف Sales/all_record_sales.json")
                }
            }


        }
        load_format_record_sales__file() {
            try {
                this.handel_format_record_sales__ary()
                console.log("تمت القراءة من ملف format_record_sales.json")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Sales/format_record_sales.json', JSON.stringify(data), 'utf-8')
                    this.handel_format_record_sales__ary()
                    console.log("لم يتم العثور على ملف  format_record_sales.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف format_record_sales.json")
                }
            }
        }
        load_buy_fatora__file() {

            try {
                this.handel_buy_fatora__ary()
                console.log("تمت القراءة من ملف buy_fatora")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Buy_fatora/buy_fatora.json', JSON.stringify(data), 'utf-8')
                    this.handel_buy_fatora__ary()
                    console.log("لم يتم العثور على ملف  buy_fatora (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف buy_fatora.json")
                }
            }
        }
        load_buy_fatora_id__file() {
            try {
                this.handel_buy_fatora_id()
                console.log("تمت القراءة من ملف num_of_buy_fatora")
            } catch {
                try {
                    let data = [-1]
                    fs.writeFileSync('./Data/Buy_fatora/buy_fatora_id.json', JSON.stringify(data), 'utf-8')
                    this.handel_buy_fatora_id()
                    console.log("لم يتم العثور على ملف  num_of_buy_fatora (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف buy_fatora_id.json")
                }
            }
        }
        load_moarid__file() {
            try {
                this.handel_moirid__ary()
                console.log("تمت القراءة من ملف moirid__ary")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Moarid/moarid.json', JSON.stringify(data), 'utf-8')
                    this.handel_moirid__ary()
                    console.log("لم يتم العثور على ملف  moarid.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف moarid.json")
                }
            }
        }
        load_moarid_id__file() {
            try {
                this.handel_moirid__id()
                console.log("تمت القراءة من ملف moirid__id")
            } catch {
                try {
                    let data = [0]
                    fs.writeFileSync('./Data/Moarid/moarid_id.json', JSON.stringify(data), 'utf-8')
                    this.handel_moirid__id()
                    console.log("لم يتم العثور على ملف  moarid_id.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف moarid_id.json")
                }
            }
        }
        load_customers__file() {

            try {
                this.handel_customers__ary()
                console.log("تمت القراءة من ملف Customers")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Customers/customers.json', JSON.stringify(data), 'utf-8')
                    this.handel_customers__ary()
                    console.log("لم يتم العثور على ملف  Customers.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف Customers.json")
                }
            }
        }
        load_customers_id__file() {

            try {
                this.handel_customers__id()
                console.log("تمت القراءة من ملف Customers_id")
            } catch {
                try {
                    let data = [0]
                    fs.writeFileSync('./Data/Customers/customers_id.json', JSON.stringify(data), 'utf-8')
                    this.handel_customers__id()
                    console.log("لم يتم العثور على ملف  Customers_id.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف Customers_id.json")
                }
            }
        }
        load_sell_fatora__file() {

            try {
                this.handel_sell_fatora__ary()
                console.log("تمت القراءة من ملف sell_fatora.json")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Sell_fatora/sell_fatora.json', JSON.stringify(data), 'utf-8')
                    this.handel_sell_fatora__ary()
                    console.log("لم يتم العثور على ملف  sell_fatora.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف sell_fatora.json")
                }
            }
        }

        load_sell_fatora_id__file() {
            try {
                this.handel_sell_fatora__id()
                console.log("تمت القراءة من ملف sell_fatora_id.json")
            } catch {
                try {
                    let data = [0]
                    fs.writeFileSync('./Data/Sell_fatora/sell_fatora_id.json', JSON.stringify(data), 'utf-8')
                    this.handel_sell_fatora__id()
                    console.log("لم يتم العثور على ملف  sell_fatora_id.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف sell_fatora_id.json")
                }
            }
        }

        load_Notifications__file() {
            try {
                this.handel_Notifications__ary()
                console.log("تمت القراءة من ملف notifications.json")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/Notifications/notifications.json', JSON.stringify(data), 'utf-8')
                    this.handel_Notifications__ary()
                    console.log("لم يتم العثور على ملف  notifications.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف notifications.json")
                }
            }
        }
        //-----------------------------------------------------------------------------------------------




        //--------------------------دوال تهيئة المتغيرات بقيم الملفات -----------------------------

        handel_all_items__ary() { // هذه الدالة تقوم بتحميل البيانات من الملف الى السجل او المتغير الخاص به 
            this.all_items_in_storage__ary = this.gave_me_data_from('./Data/Storage/all_items_in_storage.json')
        }
        handel_format_items__ary() {
            this.format_items_in_srorage__ary = this.gave_me_data_from('./Data/Storage/format_items_in_storage.json')
        }
        handel_format_items__id() {
            this.format_items_in_srorag__id = this.gave_me_data_from('./Data/Storage/format_items_in_storage_id.json')
        }
        handel_all_record_sales__ary() {
            this.all_sales_record__ary = this.gave_me_data_from('./Data/Sales/all_record_sales.json')
        }
        handel_format_record_sales__ary() {
            this.format_record_sales__ary = this.gave_me_data_from('./Data/Sales/format_record_sales.json')
        }
        handel_buy_fatora__ary() {

            this.buy_fatora_ary = this.gave_me_data_from('./Data/Buy_fatora/buy_fatora.json')
        }
        handel_buy_fatora_id() {
            this.buy_fatora_id = this.gave_me_data_from('./Data/Buy_fatora/buy_fatora_id.json')
        }
        handel_moirid__ary() {
            this.moarid__ary = this.gave_me_data_from('./Data/Moarid/moarid.json')
        }
        handel_moirid__id() {
            this.moarid__id = this.gave_me_data_from('./Data/Moarid/moarid_id.json')
        }
        handel_customers__ary() {
            this.customers__ary = this.gave_me_data_from('./Data/Customers/customers.json')
        }
        handel_customers__id() {
            this.customers__id = this.gave_me_data_from('./Data/Customers/customers_id.json')
        }
        handel_sell_fatora__ary() {
            this.sell_fatora__ary = this.gave_me_data_from('./Data/Sell_fatora/sell_fatora.json')
        }
        handel_sell_fatora__id() {
            this.sell_fatora__id = this.gave_me_data_from('./Data/Sell_fatora/sell_fatora_id.json')
        }
        handel_Notifications__ary() {
            this.Notifications__ary = this.gave_me_data_from('./Data/Notifications/notifications.json')
        }
        //-----------------------------------------------------------------------------------------------



        gave_me_data_from(file_path) {
            const data = fs.readFileSync(file_path, 'utf-8')
            return JSON.parse(data)

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

            this.t_id_for_add_item_in_sell_fatora = 1
            this.t_customer_id_for_add_sell_fatora = 1

            this.start_i_in_buy_fatora = 0

        }


        // -----------(S فاتورة الشراء)--------------
        rice_buy_fatora_id() {
            Data_M_C.buy_fatora_id++
            return Data_M_C.buy_fatora_id
        }

        start_buy_fatora() {
            if (Data_M_C.buy_fatora_is_run == false) {
                this.start_i_in_buy_fatora = Data_M_C.all_items_in_storage__ary.length
                Data_M_C.buy_fatora_is_run = true
                let date = new Date(Date_MC.getFormattedDateTime())
                Data_M_C.buy_fatora_ary.push(
                    {
                        "id": this.rice_buy_fatora_id(),
                        "moarid_id": 12,
                        "boss_name": "",
                        "num_items": 0,
                        "num_pieces": 0,
                        "total_price": 0,
                        "payment_status": "",
                        "amount_paid": 0,
                        "date": date.getTime()
                    })

            }


        }


        add_item_to_buy_fatora() {
            let name = document.getElementById('name_item_in_buy_fatora').value

            let co_name = document.getElementById('co_name_item_in_buy_fatora').value

            let num = (+  document.getElementById('num_item_in_buy_fatora').value)

            let price = (+ document.getElementById('price_item_in_buy_fatora').value)

            let profit = (+  document.getElementById('profit_item_in_buy_fatora').value)

            let code = document.getElementById('code_item_in_buy_fatora').value

            let end_date = document.getElementById('end_date_item_in_buy_fatora').value
            let id_item = ''
            let find = false


            if (name) {
                if (co_name) {
                    if (code) {
                        if ((+num) > 0) {
                            if ((+price) > 0) {
                                if ((+profit) >= 0) {
                                    // عند تحقق كل الشروط السابقة تبدأ عملية الاضافة من هنا 

                                    for (let i = 0; i < Data_M_C.format_items_in_srorage__ary.length; i++) {

                                        if (Data_M_C.format_items_in_srorage__ary[i]["code"] == code) {
                                            console.log("العنصر موجود في المخزن مسبقا ")
                                            if (Data_M_C.format_items_in_srorage__ary[i]["num"] > 0) {
                                                console.log("بما ان سجل الدواء موجود سيتم تحديث تاريخ انتهاء صلاحية الدواء ولكن يوجد قطع موجودة سابقا يفضل مراجعتها والتاكد منها بشكل يدوي")
                                            }
                                            Data_M_C.format_items_in_srorage__ary[i]["num"] += num
                                            Data_M_C.format_items_in_srorage__ary[i]["price"] = price
                                            Data_M_C.format_items_in_srorage__ary[i]["profit"] = profit
                                            Data_M_C.format_items_in_srorage__ary[i]["end_date"] = end_date
                                            id_item = Data_M_C.format_items_in_srorage__ary[i]["id"]

                                            find = true
                                            break
                                        }

                                    }
                                    if (!find) { // العنصر غير موجود
                                        console.log("العنصر غير موجود")
                                        id_item = 1 // زيادة
                                        let data_to_format_items = {
                                            "id": id_item,
                                            "name": name,
                                            "co_name": co_name,
                                            "num": num,
                                            "price": price,
                                            "profit": profit,
                                            "finall_price": (+price) + ((+price) * (+profit)),
                                            "code": code,
                                            "end_date": end_date,
                                            "add_date": Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["date"]

                                        }

                                        Data_M_C.format_items_in_srorage__ary.push(data_to_format_items)


                                    }


                                    let data_to_all_items = {
                                        "id_item": id_item,
                                        "buy_fatora_id": Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["id"],
                                        "name": name,
                                        "co_name": co_name,
                                        "num": num,
                                        "price": price,
                                        "profit": profit,
                                        "finall_price": (+price) + ((+price) * (+profit)),
                                        "code": code,
                                        "end_date": end_date,
                                        "add_date": Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["date"]

                                    }

                                    Data_M_C.all_items_in_storage__ary.push(data_to_all_items)
                                    Data_M_C.cuont_items_in_buy_fatora++
                                    Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["num_pieces"] += (+num)
                                    Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["total_price"] += ((+price) * num)

                                    this.show_items_in_buy_fatora()

                                    document.getElementById('name_item_in_buy_fatora').value = ""
                                    document.getElementById('co_name_item_in_buy_fatora').value = ""
                                    document.getElementById('num_item_in_buy_fatora').value = ""
                                    document.getElementById('price_item_in_buy_fatora').value = ""
                                    document.getElementById('profit_item_in_buy_fatora').value = ""
                                    document.getElementById('code_item_in_buy_fatora').value = ""
                                    document.getElementById('end_date_item_in_buy_fatora').value = ""





                                } else {
                                    console.log("لا يمكن ان تكون نسبة الربح عدد سالب ")
                                    return
                                }

                            } else {
                                console.log("لا يمكن ان يكون السعر قيمة معدومة او سالبة")
                                return
                            }

                        } else {
                            console.log("لا يمكن اضافة عنصر ذو عدد قطع معدومة او سالبة")
                            return
                        }
                    } else {
                        console.log(" e    code")
                    }

                } else {
                    console.log("خانة اسم الشركة فارغة")
                    return
                }

            } else {
                console.log("خانة الاسم فارغة ")
                return
            }

        }

        del_item_from_buy_fatora(i) {
            Data_M_C.all_items_in_storage__ary.splice(i, 1)

        }
        add_buy_fatora() {
            if (Data_M_C.cuont_items_in_buy_fatora > 0) {
                let moarid_name = document.getElementById('morid_name').value.trim().toLowerCase()
                let moarid_id
                let boss_name = document.getElementById('boss_name').value
                let payment_status = document.getElementById('payment_status').value
                let amount_paid = (+ document.getElementById('amount_paid').value)
                let find = false


                if (moarid_name) {
                    if (boss_name) {
                        if (amount_paid >= 0) {
                            for (let i = 0; i < Data_M_C.moarid__ary.length; i++) {
                                if (moarid_name == Data_M_C.moarid__ary[i]["name"]) {
                                    moarid_id = Data_M_C.moarid__ary[i]["id"]
                                    find = true
                                    break
                                }
                            }
                            if (find) {

                                Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["moarid_id"] = moarid_id
                                Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["boss_name"] = boss_name
                                Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["payment_status"] = payment_status
                                Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["amount_paid"] = amount_paid
                                Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["num_items"] = Data_M_C.cuont_items_in_buy_fatora

                                let total = Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["total_price"]
                                if (total == amount_paid) {
                                    console.log("تم التسديد")
                                }
                                else if (total > amount_paid) {
                                    for (let i = 0; i < Data_M_C.moarid__ary.length; i++) {
                                        if (Data_M_C.moarid__ary[i]["id"] == moarid_id) {
                                            Data_M_C.moarid__ary[i]["debt_on_him"] += (total - amount_paid)
                                            break
                                        }
                                    }
                                } else if (total < amount_paid) {
                                    for (let i = 0; i < Data_M_C.moarid__ary.length; i++) {
                                        if (Data_M_C.moarid__ary[i]["id"] == moarid_id) {
                                            Data_M_C.moarid__ary[i]["debt_on_me"] += (amount_paid - total)
                                            break
                                        }
                                    }
                                }



                                Data_M_C.buy_fatora_is_run = false
                                console.log("تمت اضافة فاتورة الشراء من المورد  : ", moarid_name)
                                // حفظ في الملفات 
                                try {
                                    Data_M_C.geve_data_toSave_in('./Data/Storage/all_items_in_storage.json', Data_M_C.all_items_in_storage__ary)
                                    Data_M_C.geve_data_toSave_in('./Data/Buy_fatora/buy_fatora.json', Data_M_C.buy_fatora_ary)
                                    Data_M_C.geve_data_toSave_in('./Data/Buy_fatora/buy_fatora_id.json', Data_M_C.buy_fatora_id)
                                    Data_M_C.geve_data_toSave_in('./Data/Moarid/moarid.json', Data_M_C.moarid__ary)
                                    Data_M_C.geve_data_toSave_in('./Data/Storage/format_items_in_storage.json', Data_M_C.format_items_in_srorage__ary)
                                } catch {
                                    console.error("خطاء في حفظ الملفات ")
                                }
                                document.getElementById('div_of_shwing_in_buy_fatora').innerHTML = ""
                                document.getElementById('total_price_span').innerText = ""

                                document.getElementById('name_item_in_buy_fatora').value = ""
                                document.getElementById('co_name_item_in_buy_fatora').value = ""
                                document.getElementById('num_item_in_buy_fatora').value = ""
                                document.getElementById('price_item_in_buy_fatora').value = ""
                                document.getElementById('profit_item_in_buy_fatora').value = ""
                                document.getElementById('code_item_in_buy_fatora').value = ""
                                document.getElementById('end_date_item_in_buy_fatora').value = ""


                                document.getElementById('morid_name').value = ""
                                document.getElementById('boss_name').value = ""
                                document.getElementById('payment_status').value = ""
                                document.getElementById('amount_paid').value = ""

                            } else {
                                console.log("لم يتم العثور على اسم المورد ")
                            }





                        } else {
                            console.log("نقص في معلومات الفاتورة - المبلغ المدفوع ")
                            return
                        }



                    } else {
                        console.log("نقص في معلومات الفاتورة - مدير المستودع")
                        return
                    }

                } else {
                    console.log("نقص في معلومات الفاتورة - المورد")
                    return
                }

            } else {
                console.log('لا يمكن اضافة فاتورة خالية من العناصر ')
            }



        }

        cancel_buy_fatora() {
            Data_M_C.buy_fatora_is_run = false
            Data_M_C.handel_buy_fatora__ary
            Data_M_C.handel_buy_fatora_id()
            Data_M_C.handel_all_items__ary()
            document.getElementById('buy_fatora_box').style.display = "none"
            document.getElementById('div_of_shwing_in_buy_fatora').innerHTML = ""
            document.getElementById('total_price_span').innerText = ""



            document.getElementById('name_item_in_buy_fatora').value = ""
            document.getElementById('co_name_item_in_buy_fatora').value = ""
            document.getElementById('num_item_in_buy_fatora').value = ""
            document.getElementById('price_item_in_buy_fatora').value = ""
            document.getElementById('profit_item_in_buy_fatora').value = ""
            document.getElementById('code_item_in_buy_fatora').value = ""
            document.getElementById('end_date_item_in_buy_fatora').value = ""


            // document.getElementById('morid_name').value = ""
            document.getElementById('boss_name').value = ""
            document.getElementById('payment_status').value = ""
            document.getElementById('amount_paid').value = ""

        }

        show_items_in_buy_fatora() {
            document.getElementById('total_price_span').innerText = Data_M_C.buy_fatora_ary[Data_M_C.buy_fatora_ary.length - 1]["total_price"]
            const container = document.getElementById("div_of_shwing_in_buy_fatora")
            container.innerHTML = ""
            let data = Data_M_C.all_items_in_storage__ary
            for (let i = this.start_i_in_buy_fatora; i < data.length; i++) {
                container.innerHTML += `
                 <div class="inf-boy-fat2">
                            <span>${data[i]["name"]}</span>
                            <span>${data[i]["co_name"]}</span>
                            <span>${data[i]["num"]}</span>
                            <span>${data[i]["price"]}</span>
                            <span>${data[i]["price"] * data[i]["num"]}</span>
                            
                           <span class="del_item_from_buy_fatora_button" class = "del_item_from_buy_fatora_button">حذف</span> 
                        </div>
                `
            }

            let but = document.querySelectorAll('.del_item_from_buy_fatora_button')
            but.forEach((but, i) => {
                but.addEventListener('click', () => {
                    console.log(i)
                    this.del_item_from_buy_fatora(i)
                    this.show_items_in_buy_fatora()
                })
            })

        }


        // ----------------------------------------------


        // ------------(فاتورة بيع)----------------------
        rice_sell_fatora_id() {
            Data_M_C.handel_sell_fatora__id()
            Data_M_C.sell_fatora__id++
            return Data_M_C.sell_fatora__id
        }
        start_sell_fatora() {
            if (Data_M_C.sell_fatora_is_run == false) {
                Data_M_C.sell_fatora_is_run = true
                let date = new Date(Date_MC.getFormattedDateTime())
                Data_M_C.sell_fatora__ary.push(
                    {
                        "id": this.rice_sell_fatora_id(),
                        "customer_id": 0,
                        "boss_name": "",
                        "num_items": 0,
                        "num_pieces": 0,
                        "total_price": 0,
                        "payment_status": "",
                        "amount_paid": 0,
                        "date": date.getTime()
                    }
                )

            }

        }
        add_item_to_sell_fatora() {
            let id = this.t_id_for_add_item_in_sell_fatora
            let sell_fatora_id = (+Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["id"])
            let name = "name"
            let co_name = "co_name"
            let num = 7
            let sell_price = 5
            let code = "111"
            let profit
            let find = false

            if (id > 0) {
                if (sell_fatora_id > 0) {
                    if (name) {
                        if (co_name) {
                            if ((+num) > 0) {
                                if ((+sell_price) > 0) {
                                    if (code) {


                                        for (let i = 0; i < Data_M_C.format_items_in_srorage__ary.length; i++) {
                                            if (id == Data_M_C.format_items_in_srorage__ary[i]["id"]) {

                                                if ((+Data_M_C.format_items_in_srorage__ary[i]["num"] - num) >= Data_M_C.zero_number) {


                                                    Data_M_C.format_items_in_srorage__ary[i]["num"] -= num
                                                    profit = Data_M_C.format_items_in_srorage__ary[i]["profit"]
                                                    Data_M_C.all_sales_record__ary.push({
                                                        "id": id,
                                                        "sell_fatora_id": sell_fatora_id,
                                                        "name": name,
                                                        "co_name": co_name,
                                                        "num": num,
                                                        "sell_price": sell_price,
                                                        "profit": profit,
                                                        "all_profit": num * profit,
                                                        "all_sell_price": num * sell_price,
                                                        "code": code,
                                                        "sell_date": Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["date"]
                                                    })

                                                    for (let j = 0; j < Data_M_C.format_record_sales__ary.length; j++) {

                                                        if (Data_M_C.format_record_sales__ary[j]["id"] == id) {
                                                            Data_M_C.format_record_sales__ary[j]["total_num"] += num
                                                            Data_M_C.format_record_sales__ary[j]["total_sell_price"] += (num * sell_price)
                                                            Data_M_C.format_record_sales__ary[j]["total_profit"] += (num * profit)
                                                            find = true
                                                            break
                                                        }
                                                    }
                                                    if (!find) {
                                                        Data_M_C.format_record_sales__ary.push({
                                                            "id": id,
                                                            "name": name,
                                                            "co_name": co_name,
                                                            "total_num": num,
                                                            "total_sell_price": (num * sell_price),
                                                            "total_profit": num * profit,
                                                            "code": code
                                                        })
                                                    }
                                                    Data_M_C.cuont_items_in_sell_fatora++
                                                    Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["total_price"] += sell_price
                                                    Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["num_pieces"] += num



                                                    // فحص الاشعارات 
                                                    Notifications_M_C.Notificat_when_empty_item(Data_M_C.format_items_in_srorage__ary[i])
                                                    Notifications_M_C.Notifications_when_running_out_item(Data_M_C.format_items_in_srorage__ary[i])


                                                    return


                                                } else {
                                                    console.log("num n ot enagh")
                                                    return
                                                }
                                            }
                                        }

                                        console.log("not find")
                                        return


                                    } else {
                                        console.log("e   code")
                                        return
                                    }
                                } else {
                                    console.log("e   sell_price")
                                    return
                                }
                            } else {
                                console.log("e   num")
                                return
                            }
                        } else {
                            console.log("e   co_name")
                            return
                        }
                    } else {
                        console.log("e   name")
                        return
                    }
                } else {
                    console.log("e      fatora id")
                    return
                }

            } else {
                console.log(" e   id  غير موجود")
                return
            }


        }
        del_item_from_sell_fatora(i) {
            Data_M_C.all_sales_record__ary.splice(i, 1)
        }
        add_sell_fatora() {
            if (Data_M_C.cuont_items_in_sell_fatora > 0) {
                let customer_id = this.t_customer_id_for_add_sell_fatora
                let boss_name = "yahia"
                let payment_status = "تم"
                let amount_paid = 300

                if (customer_id) {

                    if (amount_paid >= 0) {

                        Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["customer_id"] = customer_id
                        Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["boss_name"] = boss_name
                        Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["payment_status"] = payment_status
                        Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["amount_paid"] = amount_paid
                        Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["num_items"] = Data_M_C.cuont_items_in_sell_fatora
                        let total = (+Data_M_C.sell_fatora__ary[Data_M_C.sell_fatora__ary.length - 1]["total_price"])



                        if (total > amount_paid) {
                            for (let i = 0; i < Data_M_C.customers__ary.length; i++) {

                                if (Data_M_C.customers__ary[i]["id"] == customer_id) {
                                    console.log(Data_M_C.customers__ary[i])
                                    Data_M_C.customers__ary[i]["debt_on_him"] += (total - amount_paid)
                                    break
                                }
                            }
                        } else if (total < amount_paid) {
                            for (let i = 0; i < Data_M_C.customers__ary.length; i++) {
                                if (Data_M_C.customers__ary[i]["id"] == customer_id) {
                                    Data_M_C.customers__ary[i]["debt_on_me"] += (amount_paid - total)
                                    break
                                }
                            }
                        }

                        Data_M_C.sell_fatora_is_run = false

                        // حفظ
                        Data_M_C.geve_data_toSave_in('./Data/Sell_fatora/sell_fatora.json', Data_M_C.sell_fatora__ary)
                        Data_M_C.geve_data_toSave_in('./Data/Sell_fatora/sell_fatora_id.json', Data_M_C.sell_fatora__id)
                        Data_M_C.geve_data_toSave_in('./Data/Customers/customers.json', Data_M_C.customers__ary)
                        Data_M_C.geve_data_toSave_in('./Data/Sales/all_record_sales.json', Data_M_C.all_sales_record__ary)
                        Data_M_C.geve_data_toSave_in('./Data/Sales/format_record_sales.json', Data_M_C.format_record_sales__ary)
                        Data_M_C.geve_data_toSave_in('./Data/Storage/format_items_in_storage.json', Data_M_C.format_items_in_srorage__ary)
                        Data_M_C.geve_data_toSave_in('./Data/Notifications/notifications.json', Data_M_C.Notifications__ary)




                    } else {
                        console.log("e     amount_paid")
                    }

                } else {
                    console.log("e  customer id  غير موجود")
                    return
                }



            } else {
                console.log(" e empty sell fatora")
            }

        }
        cancel_sell_fatora() {
            if (Data_M_C.sell_fatora_is_run == true) {
                Data_M_C.sell_fatora_is_run = false
                Data_M_C.handel_all_record_sales__ary()
                Data_M_C.handel_sell_fatora__ary()
                Data_M_C.handel_sell_fatora__id()
            }
        }
        show_items_in_sell_fatora() {

        }


        // -----------------------------------------------



        sell_item_from_storage() { // بيع عنصر بدون فاتورة 
            let name = "yahia";
            let co_name = "yahia";     // احضار البيانات من صفحة البيع من اوسمة الادخال 
            let num = 2;
            let code = "111";
            let finall_price = 1.5;


            // فحص بعض الشروط للتاكد من عدم حصول خطاء منطقي 
            if (name) {
                if (co_name) {
                    if (code) {
                        if ((+num) > 0) {
                            if ((+finall_price) > 0) {
                                if (Array.isArray(Data_M_C.all_items_in_storage__ary)) {




                                    // البحث عن العنصر داخل السجل 
                                    for (let i = 0; i < Data_M_C.all_items_in_storage__ary.length; i++) {
                                        if (Data_M_C.all_items_in_storage__ary[i]["name"] == name && Data_M_C.all_items_in_storage__ary[i]["co_name"] == co_name || Data_M_C.all_items_in_storage__ary[i]["code"] == code) {

                                            // عند العثور على العنصر المطلوب نفحص عدد القطع الخاصه به 
                                            if ((+ Data_M_C.all_items_in_storage__ary[i]["num"]) >= (+num)) {
                                                // هنا ستتم عملية البيع 

                                                // انقاص عدد القطع المباعة من السجل 
                                                (Data_M_C.all_items_in_storage__ary[i]["num"]) -= (+num)

                                                // حفظ السجل بعد التعديل في الملف الخاص به
                                                Data_M_C.geve_data_toSave_in('./Data/Storage/all_items_in_storage.json', Data_M_C.all_items_in_storage__ary)
                                                Data_M_C.handel_all_items__ary() // اعادة تحميل بيانات السجل للتاكد من ان البيانات الموجودة في الملف نفسها موجودة في السجل المؤقت
                                                console.log("تم البيع")
                                                Record_M_C.add_to_all_sales_record(name, co_name, code, num,
                                                    Data_M_C.all_items_in_storage__ary[i]["class_"],
                                                    Data_M_C.all_items_in_storage__ary[i]["price"],
                                                    Data_M_C.all_items_in_storage__ary[i]["profit"],
                                                    Data_M_C.all_items_in_storage__ary[i]["finall_price"])


                                                // نهاية دالة البيع الفردي 



                                            } else {
                                                console.log("عدد القطع في المخزن غير كافي")

                                                return
                                            }

                                            return
                                        }
                                    }
                                    console.log("العنصر غير موجود")
                                    return


                                } else {
                                    console.log("خطاء السجل ليس مصفوفة ")

                                }

                            } else {
                                console.log("لا يمكن ان يكون سعر المبيع معدوم او قيمة سالبة")

                            }

                        } else {
                            console.log("لا يمكن ان تكون القطع معدومة او عدد سالب")

                        }

                    } else { console.log("لا يمكن ان تكون خانة الكود فارغة ") }


                } else {
                    console.log("لا يمكن ان تكون خانة اسم الشركة فارغة")
                }

            } else {
                console.log("لا يمكن ان تكون خانة الاسم فارغة")
            }



        }


        //--------------------------------------------
        search_in_storage(value) {
            let data = Data_M_C.format_items_in_srorage__ary
            value = value.replace(/\s+/g, '').toLowerCase();
            let result
            for (let i = 0; i < data.length; i++) {

                if (value == (data[i]["name"] + data[i]["co_name"]) || value == data[i]["code"]) {
                    return data[i]

                }
            }
        }


    }
    class RecordMC {
        constructor() {

        }
        add_to_all_sales_record(name, co_name, code, num, class_, price, profit, finall_price) {
            if (Array.isArray(Data_M_C.all_sales_record__ary)) {
                Data_M_C.all_sales_record__ary.push({
                    "name": name,
                    "co_name": co_name,
                    "num": num,
                    "price": price,
                    "profit": profit,
                    "code": code,
                    "class_": class_,
                    "finall_price_to_one": finall_price,
                    "finall_price_to_all": (+finall_price) * (+num),
                    "date": "2025/4/16",
                    "day": "الاربعاء",
                    "hour": "12 : 30  pm"
                })

                Data_M_C.geve_data_toSave_in('./Data/Sales/all_record_sales.json', Data_M_C.all_sales_record__ary)
                Data_M_C.handel_all_record_sales__ary()
                console.log("تمت اضافة هذ العنصر المباع الى سجل المبعات الكامل ")


            } else {
                console.log("خطاء سجل المبيعات الكامل ليس مصفوفة")
            }

        }
    }
    class MoaridMC {
        constructor() {
            this.show_moarid_in_input()

        }
        rice_moarid_id() {

            Data_M_C.moarid__id++
            Data_M_C.geve_data_toSave_in('./Data/Moarid/moarid_id.json', Data_M_C.moarid__id)
            return Data_M_C.moarid__id
        }
        add_moarid() {
            let name = "yahia"
            let debt_on_me = 0
            let debt_on_him = 0
            if (name) {
                if (debt_on_me >= 0) {
                    if (debt_on_him >= 0) {

                        let data = {
                            "name": name,
                            "id": this.rice_moarid_id(),
                            "debt_on_me": debt_on_me,
                            "debt_on_him": debt_on_him,
                            "total_money": 20000,
                            "make_date": "20/2/2023"
                        }
                        if (Array.isArray(Data_M_C.moarid__ary)) {
                            Data_M_C.moarid__ary.push(data)
                            console.log(Data_M_C.moarid__ary)
                            Data_M_C.geve_data_toSave_in('./Data/Moarid/moarid.json', Data_M_C.moarid__ary)


                        } else {
                            console.log(" not arry")
                        }

                    } else {
                        console.log("e      debt_on_him")
                    }
                } else {
                    console.log("e   debt_on_me")
                    return
                }

            } else {
                console.log("e  name")
                return
            }
        }
        del_moarid_only(i) {
            if (Data_M_C.moarid__ary[i]["debt_on_me"] == 0 && Data_M_C.moarid__ary[i]["debt_on_him"] == 0) {
                Data_M_C.moarid__ary.splice(i, 1)
                Data_M_C.geve_data_toSave_in('./Data/Moarid/moarid.json', Data_M_C.moarid__ary)
                console.log('تم حذف المورد رقم ', i)
            } else {
                console.log(" لا يمكن حذف هذا المورد بسبب الديون الموجودة .  لزيادة الامان ومنع التلاعب ")
            }
        }
        del_moarid_with_fatora(i) {
            if (Data_M_C.moarid__ary[i]["debt_on_me"] == 0 && Data_M_C.moarid__ary[i]["debt_on_him"] == 0) {
                let id = Data_M_C.moarid__ary[i]["id"]
                for (let x = 0; i < Data_M_C.buy_fatora_ary.length; x++) {
                    if (Data_M_C.buy_fatora_ary[x]["info"]["moarid_id"] == id) {
                        Data_M_C.buy_fatora_ary.splice(x, 1)
                    }
                }
                Data_M_C.moarid__ary.splice(i, 1)
                Data_M_C.geve_data_toSave_in('./Data/Moarid/moarid.json', Data_M_C.moarid__ary)
                Data_M_C.geve_data_toSave_in('./Data/Buy_fatora/buy_fatora.json', Data_M_C.buy_fatora_ary)
                console.log('تم حذف المورد رقم ', i)
            } else {
                console.log(" لا يمكن حذف هذا المورد بسبب الديون الموجودة .  لزيادة الامان ومنع التلاعب ")
            }
        }

        show_moarid_in_input() {
            let val = document.getElementById('morid_name').value.trim().toLowerCase()

            const data = Data_M_C.moarid__ary
            const container = document.getElementById('morid')
            container.innerHTML = ""
            if (!val) {
                const data = Data_M_C.moarid__ary

                for (let i = 0; i < data.length; i++) {
                    container.innerHTML += `
                        <span class ="one_moarid_name" >${data[i]["name"]}</span>
                    `
                }
                this.gave_moarid_name_event(data)
            } else {
                let result = data.filter(moarid => moarid.name.includes(val))
                for (let i = 0; i < result.length; i++) {
                    container.innerHTML += `
                    <span class ="one_moarid_name">${result[i]["name"]}</span>
                `
                }
                this.gave_moarid_name_event(result)
            }

        }
        gave_moarid_name_event(data) {

            let moarid = document.querySelectorAll('.one_moarid_name')
            moarid.forEach((moarid, i) => {
                moarid.addEventListener('click', () => {
                    document.getElementById('morid_name').value = data[i]["name"]
                    document.getElementById("morid").style.display = "none"

                })
            })
        }



    }
    class CustomersMC {
        constructor() {

        }
        rice_customers_id() {
            Data_M_C.customers__id++
            Data_M_C.geve_data_toSave_in('./Data/Customers/customers_id.json', Data_M_C.customers__id)
            return Data_M_C.customers__id

        }
        add_customers() {
            let name = "yahia";
            let debt_on_him = 50;
            let debt_on_me = 50;
            if (name) {
                if (debt_on_him >= 0) {
                    if (debt_on_me >= 0) {

                        let data = {
                            "name": name,
                            "id": this.rice_customers_id(),
                            "debt_on_him": debt_on_him,
                            "debt_on_me": debt_on_me
                        }
                        if (Array.isArray(Data_M_C.customers__ary)) {
                            Data_M_C.customers__ary.push(data)
                            Data_M_C.geve_data_toSave_in('./Data/Customers/customers.json', Data_M_C.customers__ary)

                        } else {
                            console.log("not aryy")
                        }

                    } else {
                        console.log("e   debt_on_me")
                        return
                    }
                } else {
                    console.log(" e    debt_on_him")
                    return
                }
            } else {
                console.log("e    name")
                return
            }

        }

    }
    class Statistics {
        constructor() {

        }

        get_items_from_seles_record_by_date(date, period) {
            const data1 = new Date(date);
            const stop_date = new Date(data1);

            if (period === "day") {
                stop_date.setDate(data1.getDate() - 1);
            } else if (period === "week") {
                stop_date.setDate(data1.getDate() - 7);
            } else if (period === "month") {
                stop_date.setMonth(data1.getMonth() - 1);
            } else if (period === "year") {
                stop_date.setFullYear(data1.getFullYear() - 1);
            } else {
                console.log("خطأ: فترة غير معروفة");
                return;
            }
            let items_in_date = [];
            const targetDate = data1.getTime();
            const stopDateTime = stop_date.getTime();
            for (let i = Data_M_C.all_sales_record__ary.length - 1; i >= 0; i--) {

                if (Data_M_C.all_sales_record__ary[i]["sell_date"] <= targetDate && Data_M_C.all_sales_record__ary[i]["sell_date"] > stopDateTime) {
                    items_in_date.push(Data_M_C.all_sales_record__ary[i]);
                } else if (Data_M_C.all_sales_record__ary[i]["sell_date"] <= stopDateTime) {

                    break
                }

            }
            return items_in_date
        }


        max_one_item_sell_by_num() {
            let result = {
                max: -Infinity,
                id: 0,
                name: "",
                co_name: ""

            }

            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_num"] > result.max) {
                    result.max = Data_M_C.format_record_sales__ary[i]["total_num"]
                }
            }
            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_num"] == result.max) {
                    result.id = Data_M_C.format_record_sales__ary[i]["id"]
                    result.name = Data_M_C.format_record_sales__ary[i]["name"]
                    result.co_name = Data_M_C.format_record_sales__ary[i]["co_name"]
                    break

                }
            }
            return result
        }
        max_one_item_sell_by_sales() {
            let result = {
                max: -Infinity,
                id: 0,
                name: "",
                co_name: ""

            }

            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_sell_price"] > result.max) {
                    result.max = Data_M_C.format_record_sales__ary[i]["total_sell_price"]
                }
            }
            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_sell_price"] == result.max) {
                    result.id = Data_M_C.format_record_sales__ary[i]["id"]
                    result.name = Data_M_C.format_record_sales__ary[i]["name"]
                    result.co_name = Data_M_C.format_record_sales__ary[i]["co_name"]
                    break

                }
            }
            return result
        }

        min_one_item_sell_by_num() {
            let result = {
                min: Infinity,
                id: 0,
                name: "",
                co_name: ""

            }

            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_num"] < result.min) {
                    result.min = Data_M_C.format_record_sales__ary[i]["total_num"]
                }
            }
            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_num"] == result.min) {
                    result.id = Data_M_C.format_record_sales__ary[i]["id"]
                    result.name = Data_M_C.format_record_sales__ary[i]["name"]
                    result.co_name = Data_M_C.format_record_sales__ary[i]["co_name"]
                    break

                }
            }
            return result
        }

        min_one_item_sell_by_sales() {
            let result = {
                min: Infinity,
                id: 0,
                name: "",
                co_name: ""

            }

            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_sell_price"] < result.min) {
                    result.min = Data_M_C.format_record_sales__ary[i]["total_sell_price"]
                }
            }
            for (let i = 0; i < Data_M_C.format_record_sales__ary.length; i++) {
                if (Data_M_C.format_record_sales__ary[i]["total_sell_price"] == result.min) {
                    result.id = Data_M_C.format_record_sales__ary[i]["id"]
                    result.name = Data_M_C.format_record_sales__ary[i]["name"]
                    result.co_name = Data_M_C.format_record_sales__ary[i]["co_name"]
                    break

                }
            }
            return result
        }

        num_of_items_in_storage() {
            let num = 0
            for (let i = 0; i < Data_M_C.format_items_in_srorage__ary.length; i++) {
                if (Data_M_C.format_items_in_srorage__ary[i]["num"] > Data_M_C.zero_number) {
                    num++
                }
            }
            return num
        }

        zero_items_in_storage() {
            let ids = []
            for (let i = 0; i < Data_M_C.format_items_in_srorage__ary.length; i++) {
                if (Data_M_C.format_items_in_srorage__ary[i]["num"] == Data_M_C.zero_number) {
                    ids.push(Data_M_C.format_items_in_srorage__ary[i]["id"])

                }
            }
            return ids
        }
        running_out_items_in_storage() {

            let ids = []
            for (let i = 0; i < Data_M_C.format_items_in_srorage__ary.length; i++) {
                if (Data_M_C.format_items_in_srorage__ary[i]["num"] <= Data_M_C.running_out_num && Data_M_C.format_items_in_srorage__ary[i]["num"] != Data_M_C.zero_number) {
                    ids.push(Data_M_C.format_items_in_srorage__ary[i]["id"])

                }
            }
            return ids
        }

        sort_max_items_sall_by_num() {
            const sortedSales = [...Data_M_C.format_record_sales__ary].sort((a, b) => b.total_num - a.total_num);
            return sortedSales
        }
        ten_max_sall_by_num() {
            let data = this.sort_max_items_sall_by_num();

            let top10Ids = data.slice(0, 10).map(item => item.id);
            let itemMap = new Map(Data_M_C.format_items_in_srorage__ary.map(item => [item.id, item]));
            let results = top10Ids.map(id => itemMap.get(id));

            return results
        }


        total_seles_in_last_day() {
            let data = this.get_items_from_seles_record_by_date(Date_MC.getFormattedDateTime(), "day")
            let total = 0;
            for (let i = 0; i < data.length; i++) {
                total += data[i]["all_sell_price"]
            }

            return total

        }
        total_profit_in_last_day() {
            let data = this.get_items_from_seles_record_by_date(Date_MC.getFormattedDateTime(), "day")
            let total = 0;
            for (let i = 0; i < data.length; i++) {
                total += data[i]["all_profit"]
            }

            return total
        }

    }
    class Events {
        constructor() {
            this.set_event()

        }
        set_event() {



            document.getElementById('storage').onclick = () => {
                document.getElementById('storage_page').style.display = "block"
                document.getElementById('Control_panel_page').style.display = "none"

            }

            document.getElementById('Control_panel').onclick = () => {
                document.getElementById('storage_page').style.display = "none"
                document.getElementById('Control_panel_page').style.display = "block"

            }

            // document.getElementById('conrol-2').onclick =()=>{
            //     document.getElementById('storage_page').style.display="block"
            //     document.getElementById('buy_fatora_box').style.display="none"
            //     Storage_M_C.cancel_buy_fatora()
            // }


            document.getElementById('add_new_buy_fatora_button').onclick = () => {
                document.getElementById('buy_fatora_box').style.display = "block"
                document.getElementById('storage_page').style.display = "none"
                Storage_M_C.start_buy_fatora()
            }



            document.getElementById('add_item_in_buy_fatora_button').onclick = () => {
                Storage_M_C.add_item_to_buy_fatora()
            }

            document.getElementById('add_buy_fatora_button').onclick = () => {
                Storage_M_C.add_buy_fatora()
            }
            document.getElementById('cancel_buy_fatora_button').onclick = () => {
                Storage_M_C.cancel_buy_fatora()
                document.getElementById('storage_page').style.display = "block"
            }
            document.getElementById("morid_name").onclick = () => {
                document.getElementById("morid").style.display = "flex"
            }

            document.getElementById("morid_name").oninput = () => {
                Moarid_M_C.show_moarid_in_input()

            }


        }


    }
    class DateMC {
        constructor() {

        }


        getFormattedDateTime() {
            const today = new Date();  // الحصول على تاريخ اليوم مع الوقت
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');  // الشهر يبدأ من 0
            const day = today.getDate().toString().padStart(2, '0');  // إضافة صفر إذا كان اليوم أقل من 10
            const hours = today.getHours().toString().padStart(2, '0');  // إضافة صفر إذا كانت الساعة أقل من 10
            const minutes = today.getMinutes().toString().padStart(2, '0');  // إضافة صفر إذا كانت الدقائق أقل من 10
            const seconds = today.getSeconds().toString().padStart(2, '0');  // إضافة صفر إذا كانت الثواني أقل من 10

            return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;  // التنسيق "YYYY-MM-DDTHH:MM:SS"
        }
    }
    class ShowMC {
        constructor() {
            this.show_total_selse_last_day_in_control_page()
            this.show_total_profit_last_day_in_control_page()
            this.show_num_of_items_in_control_page()
            this.show_max_items_in_control_page()




        }

        show_all_items_in_storage() {
            Data_M_C.handel_format_items__ary;
            let data = Data_M_C.format_items_in_srorage__ary
            const container = document.getElementById('show_all_items_div');
            container.innerHTML = "";

            for (let i = 0; i < data.length; i++) {
                container.innerHTML += `
                        <div class="one_item_in_storage_box" data-index="${i}">

                            <span>${data[i]["name"]} </span>
                            <span>${data[i]["co_name"]} </span>
                            <span> ${data[i]["finall_price"]} </span>
                            <span>${data[i]["num"]} </span>
                          
                            
                        </div>
                `;
            }


        }
        // عرض مبيعات هذا الييوم في صفحة التحكم 
        show_total_selse_last_day_in_control_page() {
            document.getElementById('namber-SalesCard').innerText = Statistics_M_C.total_seles_in_last_day()
        }
        show_total_profit_last_day_in_control_page() {
            document.getElementById('namber-ProfitCard').innerText = Statistics_M_C.total_profit_in_last_day()
        }
        show_num_of_items_in_control_page() {
            document.getElementById('namber-InventoryCard').innerText = Statistics_M_C.num_of_items_in_storage()
        }

        show_max_items_in_control_page() {
            let data = Statistics_M_C.ten_max_sall_by_num()
            let container = document.getElementById("show_TopSellingProducts")

            container.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i] == undefined) {
                    continue
                }
                container.innerHTML += `
            
                        <div class="one_item_in_storage_box">

                            <span>${data[i]["name"]} </span>
                            <span>${data[i]["co_name"]}  </span>
                            <span> ${data[i]["finall_price"]}  </span>
                            <span>${data[i]["num"]}  </span>
                            <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13ZM12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20ZM12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6Z"
                                        fill="#CCEAFF" />
                                    <path
                                        d="M12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13ZM12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20ZM12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6Z"
                                        fill="#CCEAFF" stroke="#0194FF" stroke-width="1.5" stroke-miterlimit="10" />
                                </svg> </span>

                        </div>
            
            `
            }

        }

    }
    class NotificationsMC {
        constructor() {
            this.Notifications_when_end_date_item()

        }
        Notificat_when_empty_item(item) {
            if (item["num"] <= Data_M_C.zero_number) {
                let id = item["id"]
                let text = "نفدت كمية هذا العنصر " + item["name"] + " " + item["co_name"] + "."
                let type = "empty";
                let date = new Date(Date_MC.getFormattedDateTime())
                Data_M_C.Notifications__ary.push({
                    "item_id": id,
                    "text": text,
                    "type": type,
                    "date": date.getTime()
                })

            }

        }
        Notifications_when_running_out_item(item) {
            if (item["num"] <= Data_M_C.running_out_num) {
                let id = item["id"]
                let text = "اقتربت كمية هذا العنصر على النفاد " + item["name"] + " " + item["co_name"] + "."
                let type = "running_out";
                let date = new Date(Date_MC.getFormattedDateTime())
                Data_M_C.Notifications__ary.push({
                    "item_id": id,
                    "text": text,
                    "type": type,
                    "date": date.getTime()
                })

            }
        }
        Notifications_when_end_date_item() {
            let date = new Date(Date_MC.getFormattedDateTime()).getTime()
            let data = Data_M_C.format_items_in_srorage__ary
            let find = false;
            for (let i = 0; i < data.length; i++) {
                if (date >= data[i]["end_date"]) {
                    find = true;
                    Data_M_C.Notifications__ary.push({
                        "item_id": data[i]["id"],
                        "text": "انتهت صلاحية الدواء " + data["name"] + " " + data["co_name"] + ".",
                        "type": "end_date",
                        "date": date
                    })
                }
            }
            if(find){
                Data_M_C.geve_data_toSave_in('./Data/Notifications/notifications.json',Data_M_C.Notifications__ary)
            }

        }
        Notifications_using(text) {
            console.log(text)
        }




    }

    // ***********************(استدعاء كائنات من الاصناف )**************************//
    const Date_MC = new DateMC()
    const Data_M_C = new DataMC()
    const Notifications_M_C = new NotificationsMC()
    const Record_M_C = new RecordMC()
    const Storage_M_C = new StorageMC()
    const Moarid_M_C = new MoaridMC()
    const Customers_M_C = new CustomersMC
    const Events_M_C = new Events()
    const Statistics_M_C = new Statistics()
    const Show_M_C = new ShowMC()

})