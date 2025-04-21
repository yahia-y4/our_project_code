const fs = require('fs');
const { parse } = require('path/posix');








window.addEventListener('DOMContentLoaded', () => {

    class DataMC {
        constructor() {
            this.all_items_in_storage__ary = []
            this.all_sales_record__ary = []
            //fatora
            this.buy_fatora_ary = []
            this.num_of_buy_fatora = -1;
            this.cuont_items_in_buy_fatora = 0
            this.buy_fatora_is_run = false


            // التاكد من وجود المجلدات
            this.make_dirs('./Data')
            this.make_dirs('./Data/Buy_fatora')



            // تحميل الملفات
            this.load_all_files()



        }

        load_all_files() {

            this.load_all_items_in_storage__file()
            this.load_all_sales_record__file()
            this.load_buy_fatora__file()
            this.load_num_of_buy_fatora__file()

        }
        make_dirs(dirPath){
              if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true }); 
              }
        }

        load_all_items_in_storage__file() {

            try {
                this.handel_all_items__ary()
                console.log("تمت القراءة من ملف all_item_in_storage")
            } catch {
                try {
                    let data = []
                    fs.writeFileSync('./Data/all_items_in_storage.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_items__ary()
                    console.log("لم يتم العثور على ملف  all_items_in_storage.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف all_items_in_storage.json")
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
                    fs.writeFileSync('./Data/all_record_sales.json', JSON.stringify(data), 'utf-8')
                    this.handel_all_record_sales__ary()
                    console.log("لم يتم العثور على ملف  all_record_sales.json (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف all_record_sales.json")
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
        load_num_of_buy_fatora__file() {
            try {
                this.handel_num_of_buy_fatora()
                console.log("تمت القراءة من ملف num_of_buy_fatora")
            } catch {
                try {
                    let data = [-1]
                    fs.writeFileSync('./Data/Buy_fatora/num_of_buy_fatora.json', JSON.stringify(data), 'utf-8')
                    this.handel_num_of_buy_fatora()
                    console.log("لم يتم العثور على ملف  num_of_buy_fatora (تم انشاؤه)")
                } catch {
                    console.log("خطا في تحميل الملف num_of_buy_fatora.json")
                }
            }
        }

        handel_all_items__ary() { // هذه الدالة تقوم بتحميل البيانات من الملف الى السجل او المتغير الخاص به 
            this.all_items_in_storage__ary = this.gave_me_data_from('./Data/all_items_in_storage.json')
        }
        handel_all_record_sales__ary() {
            this.all_sales_record__ary = this.gave_me_data_from('./Data/all_record_sales.json')
        }
        handel_buy_fatora__ary() {

            this.buy_fatora_ary = this.gave_me_data_from('./Data/Buy_fatora/buy_fatora.json')
        }
        handel_num_of_buy_fatora() {
            this.num_of_buy_fatora = this.gave_me_data_from('./Data/Buy_fatora/num_of_buy_fatora.json')
        }

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
            this.show_all_items_in_storage()

        }


        // -----------(S فاتورة الشراء)--------------

        start_buy_fatora() {
            if (Data_M_C.buy_fatora_is_run == false) {
                Data_M_C.buy_fatora_is_run = true
                Data_M_C.num_of_buy_fatora++
                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora] = {

                    "info": {
                        "id": 1,
                        "moarid_name": "",
                        "boss_name": "",
                        "num_items": 0,
                        "num_pieces": 0,
                        "total_price": 0,
                        "payment_status": "",
                        "amount_paid": 0,
                        "date": Date_MC.getCurrentDate()
                    },
                    "items": []


                }
                console.log("new fatora : ", Data_M_C.num_of_buy_fatora)
            }


        }

        add_item_to_buy_fatora() {
            // هذه البيانات يتم احظارها من صفحة html,   عن طريق وسوم ال input 
            let name = document.getElementById('name_item_in_buy_fatora').value
            let co_name = document.getElementById('co_name_item_in_buy_fatora').value
            let num = document.getElementById('num_item_in_buy_fatora').value
            let price = document.getElementById('price_item_in_buy_fatora').value
            let profit = document.getElementById('profit_item_in_buy_fatora').value
            let code = document.getElementById('code_item_in_buy_fatora').value
            let end_date = document.getElementById('end_date_item_in_buy_fatora').value


            if (name) {
                if (co_name) {
                    if ((+num) > 0) {
                        if ((+price) > 0) {
                            if ((+profit) >= 0) {
                                // عند تحقق كل الشروط السابقة تبدأ عملية الاضافة من هنا 
                                let data = {

                                    "name": name,
                                    "co_name": co_name,
                                    "num": num,
                                    "price": price,
                                    "profit": profit,
                                    "finall_price": (+price) + ((+price) * (+profit)),
                                    "code": code,
                                    "end_date": end_date,
                                    "add_date": Date_MC.getCurrentDate()

                                }

                                if (Array.isArray(Data_M_C.all_items_in_storage__ary)) {

                                    Data_M_C.all_items_in_storage__ary.push(data)

                                    console.log("تمت الاضافة بنجاح ")

                                } else {
                                    console.error("خطاء السجل ليس مصفوفة ")
                                    return
                                }

                                if (Array.isArray(Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["items"])) {

                                    Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["items"].push(data)
                                    console.log(Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora])
                                    Data_M_C.cuont_items_in_buy_fatora++
                                    Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["num_pieces"] += (+num)
                                    Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["total_price"] += ((+price) * num)
                                    this.show_items_in_buy_fatora()



                                    document.getElementById('name_item_in_buy_fatora').value = ""
                                    document.getElementById('co_name_item_in_buy_fatora').value = ""
                                    document.getElementById('num_item_in_buy_fatora').value = ""
                                    document.getElementById('price_item_in_buy_fatora').value = ""
                                    document.getElementById('profit_item_in_buy_fatora').value = ""
                                    document.getElementById('code_item_in_buy_fatora').value = ""
                                    document.getElementById('end_date_item_in_buy_fatora').value = ""

                                } else {
                                    console.log("سجل العناصر لهذه الفاتورة ليس مصفوفة ")
                                    return
                                }

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
                    console.log("خانة اسم الشركة فارغة")
                    return
                }

            } else {
                console.log("خانة الاسم فارغة ")
                return
            }

        }

        del_item_from_buy_fatora(i) {
        Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]['items'].splice(i, 1)
        this.show_items_in_buy_fatora()
        }
        add_buy_fatora() {
            if (Data_M_C.cuont_items_in_buy_fatora > 0) {

                let moarid_name = document.getElementById('morid_name').value
                let boss_name = document.getElementById('boss_name').value
                let payment_status = document.getElementById('payment_status').value
                let amount_paid = document.getElementById('amount_paid').value

                if (moarid_name) {
                    if (boss_name) {
                        if (payment_status) {
                            if (amount_paid) {


                                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["moarid_name"] = moarid_name
                                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["boss_name"] = boss_name
                                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["payment_status"] = payment_status
                                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["amount_paid"] = amount_paid
                                Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["num_items"] = Data_M_C.cuont_items_in_buy_fatora


                                Data_M_C.buy_fatora_is_run = false
                                // حفظ في الملفات 
                                try {
                                    Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage__ary)
                                    Data_M_C.geve_data_toSave_in('./Data/Buy_fatora/buy_fatora.json', Data_M_C.buy_fatora_ary)
                                    Data_M_C.geve_data_toSave_in('./Data/Buy_fatora/num_of_buy_fatora.json', Data_M_C.num_of_buy_fatora)
                                } catch {
                                    console.error("خطاء في حفظ الملفات ")
                                }
                                 document.getElementById('div_of_shwing_in_buy_fatora').innerHTML = ""
                                  document.getElementById('total_price_span').innerText=""

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
                                console.log("نقص في معلومات الفاتورة - المبلغ المدفوع ")
                                return
                            }

                        } else {
                            console.log("نقص في معلومات الفاتورة - حالة الدفع ")
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
            Data_M_C.handel_buy_fatora__ary()
            Data_M_C.handel_num_of_buy_fatora()
            document.getElementById('buy_fatora_box').style.display = "none"
             document.getElementById('div_of_shwing_in_buy_fatora').innerHTML = ""
             document.getElementById('total_price_span').innerText=""



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

        }

        show_items_in_buy_fatora() {
            document.getElementById('total_price_span').innerText = Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["info"]["total_price"]
            document.getElementById('div_of_shwing_in_buy_fatora').innerHTML = ""
            let items = Data_M_C.buy_fatora_ary[Data_M_C.num_of_buy_fatora]["items"]
            for (let i = 0; i < items.length; i++) {
                document.getElementById('div_of_shwing_in_buy_fatora').innerHTML += `
            
           <span>${items[i].name}</span>
       
           <span>${items[i].co_name}</span>
          
           <span>${items[i].num}</span>
         
           <span>${items[i].price}</span>
        
           <span>${(+items[i].num) * (+items[i].price)}</span>
           <div class="del_item_from_buy_fatora_button" class = "del_item_from_buy_fatora_button">حذف</div>
            
            
            `;
            }

            let but = document.querySelectorAll('.del_item_from_buy_fatora_button')
            but.forEach((but, i) => {
                but.addEventListener('click', () => {
                    this.del_item_from_buy_fatora(i)
                })
            })

        }

         // -----------(E فاتورة الشراء)--------------



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
                                                Data_M_C.geve_data_toSave_in('./Data/all_items_in_storage.json', Data_M_C.all_items_in_storage__ary)
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


        // ------------(S عرض الادوية في صفحة المخزون )---------------

        show_all_items_in_storage() {
            Data_M_C.handel_all_items__ary();
            let data =Data_M_C.all_items_in_storage__ary
            const container = document.getElementById('show_all_items_div');
            container.innerHTML = "";
        
            for (let i = 0; i <data.length; i++) {
                container.innerHTML += `
                    <div class="one_item_in_storage_box" data-index="${i}">
                        <span>${data[i].name}</span>
                        <span>${data[i].co_name}</span>
                        <span>${data[i].finall_price} </span>
                        <span>${data[i].num}</span>
                    </div>
                `;
            }
        
            const boxes = document.querySelectorAll('.one_item_in_storage_box');
            boxes.forEach((box, i) => {
                box.addEventListener('click', () => {
                    console.log(i);
                });
            });
        }

        // ------------(E عرض الادوية في صفحة المخزون )---------------

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

                Data_M_C.geve_data_toSave_in('./Data/all_record_sales.json', Data_M_C.all_sales_record__ary)
                Data_M_C.handel_all_record_sales__ary()
                console.log("تمت اضافة هذ العنصر المباع الى سجل المبعات الكامل ")


            } else {
                console.log("خطاء سجل المبيعات الكامل ليس مصفوفة")
            }

        }
    }

    class Events {
        constructor() {
            this.set_event()

        }
        set_event() {
            document.getElementById('add_new_buy_fatora_button').onclick = () => {
                document.getElementById('buy_fatora_box').style.display = "block"
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
            }


        }


    }

    class DateMC {
        constructor() {

        }

        getCurrentTime12Hour() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // تحويل الساعة إلى تنسيق 12 ساعة

            return `${hours}:${minutes}:${seconds} ${period}`;
        }
        getCurrentDate() {
            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0'); // اليوم
            const month = String(today.getMonth() + 1).padStart(2, '0'); // الشهر
            const year = today.getFullYear(); // السنة

            // يمكنك تعديل التنسيق حسب الحاجة
            return `${day}/${month}/${year}`;
        }

        getDayOfWeek() {
            const daysOfWeek = ['الأحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'];
            const today = new Date();
            return daysOfWeek[today.getDay()];
        }
    }

    // *************************************************//
    const Date_MC = new DateMC()
    const Data_M_C = new DataMC()
    const Record_M_C = new RecordMC()
    const Storage_M_C = new StorageMC()
    const Events_M_C = new Events()

})



