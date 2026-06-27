---
name: tfm-architect
description: Diseña arquitectura, requisitos, diagramas C4, modelo de datos y decisiones técnicas (ADR) para un TFM con React Native, NestJS, TypeScript, SQLite y OpenAI API. Usar al planificar el TFM, definir arquitectura, documentar decisiones, o cuando el usuario mencione TFM, C4, requisitos o modelo de datos.
---

# TFM Architect

Skill para diseñar la arquitectura y documentación técnica de un Trabajo Fin de Máster (TFM) con stack **React Native + NestJS + TypeScript + SQLite + OpenAI API**.

## Principios obligatorios

Aplicar en toda propuesta arquitectónica:

- TypeScript estricto; evitar `any` salvo justificación explícita.
- Simplicidad sobre complejidad; evitar sobreingeniería.
- Arquitectura modular con separación clara: **presentación**, **lógica de negocio**, **persistencia**.
- Código entendible por un desarrollador individual.
- Decisiones técnicas importantes documentadas como ADR.
- Diagramas C4 cuando aporten claridad académica (no decorativos).

## Flujo de trabajo

Copiar y seguir este checklist:

```
Progreso:
- [ ] 1. Aclarar contexto y alcance
- [ ] 2. Definir requisitos
- [ ] 3. Diseñar arquitectura (C4 nivel 1-2 mínimo)
- [ ] 4. Modelar datos
- [ ] 5. Registrar decisiones técnicas (ADR)
- [ ] 6. Validar coherencia y simplicidad
```

### Paso 1: Aclarar contexto

Antes de diseñar, confirmar o inferir:

| Aspecto | Preguntas clave |
|---------|-----------------|
| Problema | ¿Qué problema resuelve el TFM? ¿Para quién? |
| Alcance | ¿Qué entra y qué queda fuera del MVP? |
| Restricciones | ¿Plazos, dispositivos, offline, privacidad, coste API? |
| Actores | ¿Usuarios, administradores, sistemas externos? |
| Integraciones | ¿OpenAI, notificaciones, autenticación externa? |

Si falta información crítica, preguntar antes de proponer arquitectura.

### Paso 2: Requisitos

Usar la plantilla de [reference.md](reference.md#requisitos). Clasificar en:

- **Funcionales (RF)**: comportamiento observable del sistema.
- **No funcionales (RNF)**: rendimiento, seguridad, usabilidad, mantenibilidad, offline.

Priorizar con **MoSCoW** (Must / Should / Could / Won't). Cada requisito debe ser verificable.

### Paso 3: Arquitectura C4

Generar al menos **Context** y **Container**. Añadir **Component** solo para módulos críticos.

**Nivel 1 — Contexto**: sistema TFM, usuarios y sistemas externos (p. ej. OpenAI).

**Nivel 2 — Contenedores**: app React Native, API NestJS, SQLite, servicios externos.

**Nivel 3 — Componentes**: módulos NestJS (controllers, services, repositories) y capas RN (screens, hooks, services).

Usar **Mermaid** para diagramas C4-style. Plantillas en [reference.md](reference.md#diagramas-c4).

Estructura de proyecto recomendada:

```
mobile/                    # React Native
  src/
    screens/               # Presentación
    components/
    hooks/                 # Lógica de UI reutilizable
    services/              # Cliente HTTP, OpenAI wrapper
    storage/               # SQLite local / cache
    types/

backend/                   # NestJS
  src/
    modules/               # Un módulo por dominio
      <dominio>/
        <dominio>.controller.ts
        <dominio>.service.ts
        <dominio>.repository.ts
        dto/
        entities/
    common/                # Guards, filters, pipes compartidos
    config/
```

Regla: un módulo NestJS = un bounded context del dominio. En RN, pantallas delgadas; lógica en hooks y services.

### Paso 4: Modelo de datos

Definir:

1. **Entidades** con atributos, tipos TypeScript y restricciones.
2. **Relaciones** (1:1, 1:N, N:M) con cardinalidad.
3. **Ubicación**: SQLite local (RN), SQLite/PostgreSQL en backend, o híbrido — justificar.
4. **Sincronización** (si aplica): estrategia offline-first o online-only.

Usar la plantilla de [reference.md](reference.md#modelo-de-datos). Incluir diagrama ER en Mermaid cuando haya más de 3 entidades.

### Paso 5: Decisiones técnicas (ADR)

Documentar decisiones no obvias: elección de ORM, estrategia de auth, manejo de prompts OpenAI, almacenamiento offline, etc.

Formato ADR en [reference.md](reference.md#adr). Numerar secuencialmente (ADR-001, ADR-002…).

### Paso 6: Validación final

Revisar coherencia cruzada:

- [ ] Cada RF tiene soporte en contenedores/componentes.
- [ ] El modelo de datos cubre las entidades del dominio.
- [ ] No hay capas innecesarias ni abstracciones prematuras.
- [ ] Los RNFs críticos (seguridad, offline, coste API) tienen respuesta arquitectónica.
- [ ] La complejidad es defendible ante un tribunal académico.

## Formato de entrega

Estructurar la respuesta así:

```markdown
# [Nombre del TFM] — Diseño arquitectónico

## Resumen ejecutivo
[2-3 frases: problema, solución propuesta, stack]

## Requisitos
[Tabla RF/RNF priorizada]

## Diagramas C4
### Contexto
[diagrama Mermaid]
### Contenedores
[diagrama Mermaid]
### Componentes (si aplica)
[diagrama Mermaid]

## Modelo de datos
[Entidades + diagrama ER]

## Decisiones técnicas
[ADR resumidas o enlaces]

## Riesgos y trade-offs
[Limitaciones conocidas y mitigaciones]
```

## Cuándo profundizar vs simplificar

| Situación | Acción |
|-----------|--------|
| MVP con un desarrollador | C4 nivel 1-2, pocos ADR, SQLite único |
| Integración OpenAI | ADR obligatorio: prompts, rate limits, fallback, privacidad |
| Offline / sync | ADR + diagrama de flujo de sincronización |
| Autenticación | ADR: JWT vs sesión; dónde se almacena el token en RN |
| >5 módulos de dominio | C4 nivel 3 para módulos core únicamente |

## Recursos adicionales

- Plantillas detalladas: [reference.md](reference.md)
- Ejemplo completo: [examples.md](examples.md)
