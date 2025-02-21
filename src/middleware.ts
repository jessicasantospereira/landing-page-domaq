import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth_token')?.value; // Supondo que o token de autenticação seja salvo nos cookies

    const publicRoutes = ['/', '/login']; // Rotas públicas que não exigem autenticação

    // Verifica se a rota atual está na lista de rotas públicas
    if (publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.next(); // Libera acesso
    }

    // Se o usuário não estiver autenticado, redireciona para a página de login
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next(); // Continua para a rota desejada
}

// Configuração de matcher para evitar middleware em arquivos estáticos e API routes
export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
