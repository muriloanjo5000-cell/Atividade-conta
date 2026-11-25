// noinspection JSAnnotator,JSUnresolvedReference,UnreachableCodeJS

publicclassContaCorrenteextendsConta
    privateintlimite;

    publicontaCorrente(intsaldoInicial, intlimite, Calculadoracalculadora)
    super(saldoInicial, calculadora);
    thislimite = limite;



publicintgetLimite()
     return limite;

publicvoisacar(intvalor)
    intdisponivel = getCalculadora().somar(getSaldo(), limite);

    if (valor > disponivel) {
        System.out.println("Saldo e limite insuficientes");
        return;
    }

function getSaldo() {
    return undefined;
}

function getCalculadora() {

}

intnovoSaldo = getCalculadora().subtrair(getSaldo(), valor);

function novoSaldo() {

}

function setSaldo(novoSaldo) {

}

setSaldo(novoSaldo);

publicCalculadoragetCalculadora()
    return calculadora;


protectedvoidsetSaldo(intnovoSaldo)
    thissaldo = novoSaldo;

