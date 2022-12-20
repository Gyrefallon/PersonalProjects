import hashlib
import requests
import json
import bd

bD=bd.Basedato()

rut=[]
hashi=[]
reales=[]
irreal=[]

def hash(pal):
    for x in range(0,2):
        if x == 0:
            pal=hashlib.sha256(pal.encode()).hexdigest()
        if x == 1:
            pal=hashlib.md5(pal.encode()).hexdigest()
    return pal

def hash1(pal):
    for x in range(0,2):
        if x == 0:
            pal=hashlib.sha256(pal.encode()).hexdigest()
        if x == 1:
            pal=hashlib.sha1(pal.encode()).hexdigest()
    return pal

def hash2(pal):
    for x in range(0,2):
        if x == 0:
            pal=hashlib.md5(pal.encode()).hexdigest()
        if x == 1:
            pal=hashlib.md5(pal.encode()).hexdigest()
    return pal

def hash3(pal):
    for x in range(0,1):
        if x == 0:
            pal=hashlib.md5(pal.encode()).hexdigest()
    return pal


def menu_view():
    while True:
        opcion=input('''
        Bienvenid@, por favor elija una opción:
        1. Desencriptación
        2. Historial de Desencriptación
        3. Salir
        ''')
        if opcion == '1':
            accion1()
        elif opcion == '2':
            accion2()
        elif opcion == '3':
            accion3()
            input()
            break
        else:
            print("Unknown opcion")
            input()

def accion1():
    UrI="https://codigo-alfa.cl/Api/getClaves"

    resp=requests.get(UrI)
    vocales=["a","e","i","o","u"]
    numeros=[]
    numeros2=[]
    listahash1=[]
    listahash2=[]
    listahash3=[]
    num1=0
    num2=0
    num3=100
    if resp.status_code==200:
        respjson=resp.json()
        origin=respjson['hash']

    for e in range(0,10):
        numeros.append(str(e))
        for p in numeros:
            pa=hash3(p)
            if pa not in listahash1:
                listahash1.append(pa)

    for s in vocales:
        sa=hash1(s)
        if sa not in listahash2:
            listahash2.append(sa)

    for a in range(100,1050,50):
        numeros2.append(str(a))
        for t in numeros2:
            per=hash2(t)
            if per not in listahash3:
                listahash3.append(per)

    for x in listahash1:
        if x != origin[0]:
            num1=num1+1
        else:
            print("Desencriptacion de un número al azar del 0 al 9......")
            input("")
            print(f"Código desencriptado.... {x} es igual a {num1} ")
            reales.append(num1)
            irreal.append(x)
    input("")
    for y in listahash2:
        if y != origin[1]:
            num2+=1
        else:
            print("Desencriptacion al azar de vocales.....")
            input("")
            print(f"Código desencriptado.... {y} es la vocal: {vocales[num2]} ")
            reales.append(vocales[num2])
            irreal.append(y)
    input("")
    for z in listahash3:
        if z != origin[2]:
            num3+=50
        else:
            print("Desencriptacion de un numero al azar del 100 al 1000")
            input("")
            print(f"Código desencriptado.... {z} es igual a {num3} ")
            reales.append(num3)
            irreal.append(z)

    input('''
    Se procederá a ingresar al historial la data de lo desencriptado
    Pulse tecla ENTER para continuar''')
    tuplainsert=(rut[0],hashi[0],irreal[0],irreal[1],irreal[2],reales[0],reales[1],reales[2])
    bD._transaccciones("insert into historial (RutUsu,HashUsu,Clave1D,Clave2D,Clave3D,Clave1Org,Clave2Org,Clave3Org,Fecha) values (%s,%s,%s,%s,%s,%s,%s,%s,CURRENT_TIMESTAMP())",tuplainsert)
    input('''
    LISTO!!!! Presione ENTER para continuar....''')


def accion2():
    print("Ha escogido historial de desencriptación")
    input("")
    resumen=bD._select("SELECT * FROM historial",())
    for x in resumen:
        print(f'''
        Rut del usuario: {x[1]}
        Hash del usuario: {x[2]}
        Clave desencpritada 1: {x[6]}
        Clave encriptada 1: {x[3]}
        Clave desencriptada 2: {x[7]}
        Clave encriptada 2: {x[4]}
        Clave desencriptada 3: {x[8]}
        Clave encriptada 3: {x[5]}
        Fecha y hora desencriptación: {x[9]}
        ID:{x[0]}''')
        print("*"*50)
    input("")


def accion3():
    print("Hash usuario = ", hashi[0])
    print("Nos vemos!")

def login_request():
    termino=False
    error=0
    Uri='https://codigo-alfa.cl/Api/setLogin'
    while termino==False:

        print("Hola, se requiere el rut del usuario y la password(1234)")
        Rut=input("Ingrese su Rut (Sin DV): ")
        rut.append(Rut)
        passw=hash(input("Ingrese su password: "))
        dataSend={'Rut':Rut,'Pass':passw}
        datos = requests.api.post(Uri, data=dataSend)

        param=datos.json()
        paramfiltro=param['status']

        if paramfiltro==200:
            datoi=datos.json()
            datafiltro=datoi['hash']
            hashi.append(datafiltro)
            menu_view()
            termino=True

        if error>=3:
            print("Usted ha excedido intentos fallidos")
            input()
            break

        if paramfiltro!=200:
            print("Error")
            error=error+1
            input()




