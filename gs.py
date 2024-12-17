import os, requests, time

reset = "\033[0m"
hijau = "\033[92m"
merah = "\033[31;31m"

for i in range(10, 101, 10):
    percent = i
    bar = "="
    print(f"Checking File [ {bar * (i // 10):<10} ] {percent}%", end="", flush=True)
    time.sleep(0.5)

def running(text):
    for char in text:
        print(char, end="", flush=True)
        time.sleep(0.03)

try:
    d = ".data"
    c = 0o777
    p = os.path.join("/storage/emulated/0/Android", d)
    if not os.path.exists(p):
        os.mkdir(p, c)

    time.sleep(1)
    print("\n")
    lokasi = "/storage/emulated/0/Android/.data/api_app2.odex"
    if os.path.exists(lokasi):
        time.sleep(1)
        print("Status : {}Active{}\n".format(hijau, reset))
        time.sleep(1)
        running("GODSETTING ALREADY INSTALLED ON YOUR PHONE.\n")
    else:
        url = "https://444u.my.id/config/file_update/LUNARS/api_app2.odex"
        response = requests.get(url)
        if response.status_code == 200:
            with open(lokasi, "wb") as file:
                file.write(response.content)
            time.sleep(1)
            print("Status : {}Active{}\n".format(hijau, reset))
            time.sleep(1)
            running("GODSETTINGS HAS BEEN SUCCESSFULLY INSTALLED ON YOUR PHONE.\n")
        else:
            time.sleep(1)
            print("Status : {}Inactive{}\n".format(merah, reset))
            time.sleep(1)
            running("FAILED TO GET URL LINK FILE.\n")
except FileNotFoundError:
    time.sleep(1)
    print("Status : {}Inactive{}\n".format(merah, reset))
    time.sleep(1)
    running("GODSETTINGS IS NOT AVAILABLE IN YOUR PHONE.\n")
    time.sleep(1)
