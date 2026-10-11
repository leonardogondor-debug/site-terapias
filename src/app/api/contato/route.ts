import { NextResponse } from "next/server";

// Rota que recebe o formulário de contato (POST /api/contato).
// Aqui apenas validamos e registramos no console.
// Em produção, envie por e-mail (Resend, Nodemailer) ou salve em banco/CRM.
export async function POST(request: Request) {
  const dados = await request.json().catch(() => null);

  // Validação básica dos campos obrigatórios
  if (!dados?.nome || !dados?.email || !dados?.mensagem) {
    return NextResponse.json({ erro: "Campos obrigatórios ausentes." }, { status: 400 });
  }

  console.log("Novo contato:", dados);
  return NextResponse.json({ ok: true });
}
