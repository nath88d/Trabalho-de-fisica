from openpyxl import Workbook
import os

wb = Workbook();

planilha = wb.worksheets[0];
read = open("trajetoria_bola_diurno.txt", "r");
read.seek(0);
p = 1;
planilha.title = "Gráfico";
for i in read.readlines():
    for num in range(len(i)):
        num = i.split("\t"); #converter para int
        if p == 1:
            planilha["A%d" % p] = num[0];
            planilha["B%d" % p] = num[1];
            planilha["D%d" % p] = num[0];
            planilha["E%d" % p] = num[2];
        else:
            if float(num[1].replace(",", ".")) > 0:
                planilha["A%d" % p] = float(num[0].replace(",", "."));
                planilha["B%d" % p] = float(num[1].replace(",", "."));
            if float(num[2].replace(",", ".")) > 0:
                planilha["D%d" % p] = float(num[0].replace(",", "."));
                planilha["E%d" % p] = float(num[2].replace(",", "."));

        print("Tempo: " + num[0] + " X: " + num[1] + " Y: " + num[2] +"\n" );
    p +=1

read.close();

wb.save("E:\Atividades\Trabalho_de_fisica/teste.xlsx");